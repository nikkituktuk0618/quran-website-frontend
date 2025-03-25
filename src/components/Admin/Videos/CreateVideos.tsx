import { useState } from "react";

const CreateVideo = ({close}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [duration, setDuration] = useState("00:00");
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title,
      description,
      course,
      playlist,
      thumbnailUrl,
      videoUrl,
      duration,
      isPublished,
    });
  };

  return (
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
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select a course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Playlist</label>
            <select
              className="w-full mt-1 p-2 border rounded-md"
              value={playlist}
              onChange={(e) => setPlaylist(e.target.value)}
            >
              <option value="">Select a playlist</option>
              <option value="playlist1">Playlist 1</option>
              <option value="playlist2">Playlist 2</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Thumbnail URL</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="https://example.com/image.jpg"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
          />
        </div>

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
          <label className="block text-sm font-medium">Duration</label>
          <input
            type="time"
            className="w-full mt-1 p-2 border rounded-md"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-5 w-5"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
          <label className="text-sm font-medium">Publish Video</label>
        </div>

        <div className="flex justify-end space-x-3">
          <button type="button" onClick={()=>close(false)} className="px-4 py-2 border rounded-md">
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Create Video
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateVideo;