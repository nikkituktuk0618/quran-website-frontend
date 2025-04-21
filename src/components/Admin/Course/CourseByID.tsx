import { useEffect, useState } from "react";
import { MoreHorizontal, Plus, Search, Video } from "lucide-react";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { deleteCaller, getCaller } from "@/lib/apiCaller";
import Loading from "@/components/common/Loading";
import CreatePlaylist from "../PlayList/CreatePlaylist";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useNotification from "@/hooks/useNotification";
import { Modal } from "antd";

const getAllCourses = async (id) => {
  const res = await getCaller({ url: `courses/${id}` });
  return res.type === "success" ? res.response : [];
};

function CourseByID() {
  const { courseID, playlistID } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const { contextHolder, showNotification } = useNotification();
  const navigate = useNavigate();
  const {
    data: playlist,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses", courseID],
    queryFn: () => getAllCourses(courseID!),
    enabled: !!courseID,
  });

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [PlaylistID, setPlaylistID] = useState<number | null>(null);

  useEffect(()=>{
    refetch()
  },[createPlaylist])

  if (isLoading) {
    return <Loading />;
  }

  const filteredPlaylists = playlist?.playlists?.filter((playlist) =>
    playlist.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (playlistID) {
    return <Outlet />;
  }

  // Open the delete confirmation modal
  const showDeleteModal = (id) => {
    setPlaylistID(id);
    setDeleteModalVisible(true);
  };

  // Perform deletion if confirmed
  const handleDelete = async () => {
    if (!PlaylistID) return;

    const res = await deleteCaller({ url: `playlists/${PlaylistID}` });

    if (res.type === "success") {
      showNotification("success", "Success", "Playlist deleted successfully");
      refetch();
    } else {
      showNotification("error", "Failed", "Failed to delete playlist");
    }

    setDeleteModalVisible(false);
    setPlaylistID(null);
  };

  const handleEdit = (id) => {
    setPlaylistID(id);
    setCreatePlaylist(true);
  };

  return (
    <>
      {contextHolder}
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
          Are you sure you want to delete this playlist? This action cannot be
          undone.
        </p>
      </Modal>

      <div className="w-full pt-10 h-[calc(100%-50px)]">
        <section className="w-full flex flex-col gap-5 items-center">
          <div className="w-[95%] bg-white">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-2xl font-bold text-gray-900">Playlists</h1>
              <div className="flex gap-2">
                {!createPlaylist && (
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 border hover:bg-gray-100  px-4 py-2 rounded-lg transition"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={() => setCreatePlaylist(!createPlaylist)}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                  {createPlaylist ? "Go Back" : "Create Playlist"}
                </button>
              </div>
            </div>

            {createPlaylist ? (
              <CreatePlaylist close={setCreatePlaylist} updateID={PlaylistID}/>
            ) : (
              <>
                <div className="relative my-6">
                  <input
                    type="text"
                    placeholder="Search playlists..."
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
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[95%]"
                >
                  {filteredPlaylists?.map((playlist, index) => (
                    <motion.div
                      key={playlist.id}
                      className="bg-white shadow-lg border border-gray-200 rounded-xl p-2 transition hover:shadow-xl relative"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <img
                            src={"/what_drives_me.png"}
                            alt={playlist.title}
                            className="w-20 h-20 rounded-lg object-cover shadow-md"
                          />
                          <h3 className="text-lg font-semibold text-gray-900 truncate max-w-[150px]">
                            {playlist.title}
                          </h3>
                        </div>
                        
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to={`playlist/${playlist.id}`}
                          className="text-sm bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
                        >
                          View Playlist
                        </Link>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                              <MoreHorizontal
                                size={20}
                                className="text-gray-500"
                              />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-32 bg-white border border-gray-300 rounded-md shadow-md z-10">
                            <button
                              onClick={() => handleEdit(playlist.id)}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => showDeleteModal(playlist.id)}
                              className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                            >
                              Delete
                            </button>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default CourseByID;
