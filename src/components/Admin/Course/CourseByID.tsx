import { adminplaylists } from "@/utils/constant";
import { MoreHorizontal, Search, Video } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useParams } from "react-router-dom";

function CourseByID() {
  const { playlistID } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=>{
    if(playlistID){
      console.log(playlistID);
      // api call for courses
    }
  },[playlistID])

  const filteredPlaylists = adminplaylists.filter(
    (playlist) =>
      playlist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  if(playlistID){
    return <Outlet/>
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative my-6 w-[95%]">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search playlists..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <motion.div
        className="space-y-4 w-[95%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          staggerChildren: 0.1,
        }}
      >
        {filteredPlaylists.map((playlist, index) => (
          <motion.div
            key={playlist.id}
            className="border border-gray-200 rounded-md p-4 hover:shadow-md transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link to={`playlist/${index}`}><div className="flex justify-between">
              <div className="flex">
                <div
                  className={`w-16 h-16 ${playlist.color} flex items-center justify-center rounded-md mr-4 flex-shrink-0`}
                >
                  <img
                    src={playlist.icon}
                    alt={playlist.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {playlist.title}
                  </h3>
                  <p className="text-gray-500">{playlist.description}</p>
                  <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Video size={16} />
                      <span>{playlist.videos} Videos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{playlist.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <MoreHorizontal size={20} className="text-gray-500" />
                </button>
              </div>
            </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CourseByID;
