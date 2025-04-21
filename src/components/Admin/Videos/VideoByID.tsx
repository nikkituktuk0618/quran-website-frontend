import { Clock, Edit, MoreHorizontal, Play, Search } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { videos } from "@/utils/constant";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCaller } from "@/lib/apiCaller";
import Loading from "@/components/common/Loading";

const getVideoById = async (id) => {
  const res = await getCaller({
    url: `videos/${id}`,
  });
  return res.type === "success" ? res.response : [];
};

function VideoByID() {
  const { videoID } = useParams();
  const {
    data: video,
    isLoading,
  } = useQuery({
    queryKey: ["video", videoID],
    queryFn: () => getVideoById(videoID!),
    enabled: !!videoID,
  });
    const navigate = useNavigate();

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  if(isLoading){
    return <Loading/>
  }

  return (
    <>
      <div className="pr-4 pt-4 flex w-full justify-end">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-blue-300 border hover:bg-blue-400  px-4 py-2 rounded-lg transition"
        >
          Back
        </button>
      </div>
      <motion.div
        className=""
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        <motion.div
          key={video.id}
          className=" p-2 transition"
          variants={itemVariants}
        >
          <div className="w-full max-w-6xl mx-auto p-4">
            {/* Title section */}
            <h1 className="text-2xl font-bold mb-4">{video.title}</h1>

            {/* Full width video player */}
            <div className="w-[70%] aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={"https://www.youtube.com/embed/ADDFmfOeihU"}
                title="Video Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                // className="absolute inset-0"
              ></iframe>
            </div>

            {/* Optional: Additional video metadata */}
            <div className="mt-4 text-sm text-gray-500">
              <p>
                Video #{video.video_order} • Added on{" "}
                {new Date(video.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default VideoByID;
