import React, { useState } from "react";

const PlaylistVideos = ({ courseData  }) => {
  const [activePlaylistId, setActivePlaylistId] = useState(
    courseData.playlists.length > 0 ? courseData.playlists[0].id : null
  );
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [activeVideoData, setActiveVideoData] = useState(null);

  // Toggle playlist visibility
  const togglePlaylist = (playlistId) => {
    setActivePlaylistId(playlistId === activePlaylistId ? null : playlistId);
  };

  // Play video
  const playVideo = (playlist, video) => {
    setActiveVideoId(video.id);
    setActiveVideoData({
      ...video,
      playlistTitle: playlist.title,
    });
  };
  return (
    <div className="flex flex-col min-h-[80vh] pt-4">
      {/* Main Content */}
      <div className="md:flex  flex-1 overflow-hidden gap-2">
        {/* Video Section (75%) */}
        <div className="md:w-3/4 w-full flex flex-col">
          <div className="bg-gray-100 rounded-lg flex-1 flex flex-col justify-center items-center p-4 mb-4">
            {activeVideoData ? (
              <iframe
                src={activeVideoData.video_url}
                className="w-full h-full max-h-96 rounded-lg border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex flex-col justify-center items-center text-gray-500 h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                <p className="mt-4">
                  Select a video from the playlist to start watching
                </p>
              </div>
            )}
          </div>

          <div className="mt-4">
            {activeVideoData ? (
              <>
                <h2 className="text-xl font-semibold mb-2">
                  {activeVideoData.title}
                </h2>
                <p className="text-gray-500">
                  From {activeVideoData.playlistTitle}
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-2">
                  Welcome to {courseData.title}
                </h2>
                <p className="text-gray-500">{courseData.description}</p>
              </>
            )}
          </div>
        </div>

        {/* Playlist Section (25%) */}
        <div className="md:w-1/4 w-full bg-gray-50 border-l border-gray-200 overflow-y-auto">
          <div className="bg-gray-200 p-4 font-semibold border-b border-gray-300">
            Course Content
          </div>
          <ul className="m-0 p-0 list-none">
            {courseData.playlists.map((playlist) => (
              <div key={playlist.id}>
                {/* Playlist Header */}
                <li
                  className={`p-4 border-b border-gray-200 cursor-pointer transition-colors hover:bg-blue-50 ${
                    activePlaylistId === playlist.id
                      ? "bg-blue-100 border-l-4 border-blue-600"
                      : ""
                  }`}
                  onClick={() => togglePlaylist(playlist.id)}
                >
                  {playlist.title}
                </li>

                {/* Videos List */}
                {activePlaylistId === playlist.id && (
                  <ul className="m-0 p-0 list-none">
                    {playlist.videos.map((video, index) => (
                      <li
                        key={video.id}
                        className={`py-3 px-4 pl-8 border-b border-gray-200 cursor-pointer transition-colors hover:bg-gray-100 flex items-center ${
                          activeVideoId === video.id
                            ? "bg-blue-100 font-semibold"
                            : ""
                        }`}
                        onClick={() => playVideo(playlist, video)}
                      >
                        <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex justify-center items-center text-sm mr-3">
                          {index + 1}
                        </div>
                        <div className="flex-1">{video.title}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistVideos;
