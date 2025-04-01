import { videos } from "@/utils/constant";
import { Clock, Edit, MoreHorizontal, Play, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useParams } from "react-router-dom";

function PlaylistByID() {
  const { videoID } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=>{
    if(videoID){
      console.log(videoID)
      //api call
    }
  },[videoID])

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  if(videoID){
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
          placeholder="Search videos..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <motion.div
        className="space-y-4 w-[95%]"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {filteredVideos.map((video,index) => (
          <motion.div
            key={video.id}
            className="border border-gray-200 rounded-md p-4 hover:shadow-md transition"
            variants={itemVariants}
          >
            <Link to={`video/${index}`}>
              <div className="flex justify-between flex-col md:flex-row">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-32 h-24 bg-gray-200 rounded-md mr-4 flex-shrink-0 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-40 rounded-full p-2">
                        <Play size={20} className="text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-gray-900">
                        {video.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          video.status === "Published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {video.status}
                      </span>
                    </div>

                    <p className="text-gray-500">{video.description}</p>

                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Clock size={14} className="mr-1" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <MoreHorizontal size={20} className="text-gray-500" />
                  </button>

                  <div className="flex gap-2 mt-6">
                    <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Play size={16} />
                      <span>Preview</span>
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      <Edit size={16} />
                      <span>Edit</span>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default PlaylistByID;
