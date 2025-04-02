import useNotification from "@/hooks/useNotification";
import { getCaller, postCaller } from "@/lib/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const getAllCourses = async() =>{
  const res = await getCaller({
    url:"courses"
  })
  if(res.type === "success"){
    return res.response
  }
  return [];
}

const getPlaylistsByCourse = async (courseId: number) => {
  if (!courseId) return []; // Prevent fetching if no course is selected
  const res = await getCaller({ url: `playlists/course/${courseId}` });
  return res.type === "success" ? res.response : [];
};

const CreateVideo = ({close}:{close?:(val:boolean)=>void}) => {
  const { data: courses, isLoading: coursesLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [playlist, setPlaylist] = useState<number | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [duration, setDuration] = useState("00:00");
  const {contextHolder,showNotification} = useNotification();

  // Fetch playlists based on selected course
  const { data: playlists = [] } = useQuery({
    queryKey: ["playlists", selectedCourseId],
    queryFn: () => getPlaylistsByCourse(selectedCourseId!),
    enabled: !!selectedCourseId, // Fetch only when a course is selected
  });

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
          title: title,
          playlist_id: playlist,
          video_url: videoUrl,
          video_order: duration,
        };
        const res = await postCaller({
          url: "videos",
          payload: payload,
        });
        if (res.type === "success") {
          showNotification(
            "success",
            "Success",
            "Course created successfully"
          )
          
        }else{
          showNotification(
            "error",
            "Failed",
            "Failed to create course"
          )
        }
  };

  return (
    <>
    {contextHolder}
    
    <div className="w-full p-6 rounded-lg bg-gray-50">
      <h2 className="text-2xl font-semibold">Create Video</h2>
      <p className="text-gray-600 mb-4">Add a new video to your playlist</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter video description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Course</label>
            <select
              className="w-full mt-1 p-2 border rounded-md"
              onChange={(e) => setSelectedCourseId(Number(e.target.value))}
            >
              <option value="">Select Course</option>
              {
                courses?.map((item)=>(
                  <option value={item.id}>{item.title}</option>
                ))
              }
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Playlist</label>
            <select
              className="w-full mt-1 p-2 border rounded-md"
              onChange={(e) => setPlaylist(Number(e.target.value))}
            >
              <option value="">Select Playlist</option>
              {
                playlists?.playlists?.map((item)=>(
                  <option value={item.id}>{item.title}</option>
                ))
              }
            </select>
          </div>
        </div>

        {/* <div>
          <label className="block text-sm font-medium">Thumbnail URL</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="https://example.com/image.jpg"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
          />
        </div> */}

        <div>
          <label className="block text-sm font-medium">Video URL</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="https://example.com/video.mp4"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Order number</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded-md"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        {/* <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-5 w-5"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
          <label className="text-sm font-medium">Publish Video</label>
        </div> */}

        <div className="flex justify-end space-x-3">
          {close && <button type="button" onClick={()=>close(false)} className="px-4 py-2 border rounded-md">
            Cancel
          </button>}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Create Video
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreateVideo;