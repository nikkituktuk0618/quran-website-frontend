import { Modal } from "antd";
import { useEffect, useState } from "react";
import {
  Clock,
  Edit,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCaller, deleteCaller } from "@/lib/apiCaller";
import Loading from "@/components/common/Loading";
import CreateVideo from "../Videos/CreateVideos";
import useNotification from "@/hooks/useNotification";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const getAllCourses = async (id) => {
  const res = await getCaller({
    url: `videos/playlist/${id}`,
  });
  return res.type === "success" ? res.response : [];
};

function PlaylistByID() {
  const { playlistID, videoID } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [createVideo, setCreateVideo] = useState(false);
  const { contextHolder, showNotification } = useNotification();
  const navigate = useNavigate();
  const {
    data: video,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["playlist", playlistID],
    queryFn: () => getAllCourses(playlistID!),
    enabled: !!playlistID,
  });

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deletingVideoID, setDeletingVideoID] = useState(null);

  useEffect(()=>{
    refetch();
  },[createVideo])

  if (isLoading) {
    return <Loading />;
  }

  const filteredVideos = video?.videos?.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showDeleteModal = (id) => {
    setDeletingVideoID(id);
    setDeleteModalVisible(true);
  };

  // Delete Video if Confirmed
  const handleDelete = async () => {
    if (!deletingVideoID) return;

    const res = await deleteCaller({ url: `videos/${deletingVideoID}` });

    if (res.type === "success") {
      showNotification("success", "Success", "Video deleted successfully");
      refetch();
    } else {
      showNotification("error", "Failed", "Failed to delete video");
    }

    setDeleteModalVisible(false);
    setDeletingVideoID(null);
  };

  const handleEdit = () => {
    setCreateVideo(true);
  };

  if (videoID) {
    return <Outlet />;
  }

  return (
    <div className="w-full pt-10 h-[calc(100%-50px)]">
      {contextHolder}

      {/* Delete Confirmation Modal */}
      <Modal
        title="Confirm Deletion"
        open={deleteModalVisible}
        onOk={handleDelete}
        onCancel={() => setDeleteModalVisible(false)}
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>
          Are you sure you want to delete this video? This action cannot be
          undone.
        </p>
      </Modal>

      <section className="w-full flex flex-col gap-5 items-center">
        <div className="w-[95%] bg-white">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">All Videos</h1>
              <p className="text-gray-500">
                View and manage all videos across playlists
              </p>
            </div>
            <div className="flex gap-3">
              {!createVideo && (
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 border hover:bg-gray-100  px-4 py-2 rounded-lg transition"
                >
                  Back
                </button>
              )}
              <button
                onClick={() => setCreateVideo(!createVideo)}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                {!createVideo && <Plus size={20} />}
                <span>{createVideo ? "Go Back" : "Create Video"}</span>
              </button>
            </div>
          </div>

          {createVideo ? (
            <CreateVideo close={setCreateVideo} />
          ) : (
            <>
              <div className="relative my-6">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                }}
                className="grid gap-6 w-[95%] md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition bg-white"
                  >
                    <div className="flex flex-col gap-4">
                      {/* Thumbnail */}
                      <div className="relative w-36 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={"/what_drives_me.png"}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-2">
                            <Play
                              size={20}
                              className="text-white"
                              fill="white"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="flex flex-col justify-between w-full">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {video.title}
                        </h3>

                        <div className="flex items-center justify-between mt-3">
                          {/* Options */}
                          <Popover>
                            <PopoverTrigger asChild>
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                              <MoreHorizontal
                                size={20}
                                className="text-gray-500"
                              />
                            </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-36 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                              <button
                                onClick={() => handleEdit()}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => showDeleteModal(video.id)}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                              >
                                Delete
                              </button>
                            </PopoverContent>
                          </Popover>

                          {/* Preview Button */}
                          <Link to={`video/${video.id}`}>
                            <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50">
                              <Play size={16} />
                              <span>Preview</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default PlaylistByID;
