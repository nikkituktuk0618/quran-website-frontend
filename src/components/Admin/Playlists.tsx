import { adminplaylists } from "@/utils/constant";
import { Search, Video, MoreHorizontal, Plus } from "lucide-react";
import { useState } from "react";
import CreatePlaylist from "./PlayList/CreatePlaylist";

function Playlists() {
  const [searchQuery, setSearchQuery] = useState("");
  const [createPlaylist, setCreatePlaylist] = useState(false);

  const filteredPlaylists = adminplaylists.filter(
    (playlist) =>
      playlist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full pt-10 h-[calc(100%-50px)]">
      <section className="w-full flex flex-col gap-5 items-center">
        <div className=" w-[95%] bg-white">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                All Playlists
              </h1>
              <p className="text-gray-500">
                View and manage all playlists across courses
              </p>
            </div>
            <button
              onClick={() => setCreatePlaylist(!createPlaylist)}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              {!createPlaylist && <Plus size={20} />}
              <span>{createPlaylist ? "Go Back":"Create Playlist"}</span>
            </button>
          </div>

          {createPlaylist ? (
            <CreatePlaylist close={setCreatePlaylist}/>
          ):
            <>
              <div className="relative my-6">
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

              <div className="space-y-4">
                {filteredPlaylists.map((playlist) => (
                  <div
                    key={playlist.id}
                    className="border border-gray-200 rounded-md p-4 hover:shadow-md transition"
                  >
                    <div className="flex justify-between">
                      <div className="flex">
                        <div
                          className={`w-16 h-16 ${playlist.color} flex items-center justify-center rounded-md mr-4 flex-shrink-0`}
                        >
                          {/* <span className="text-2xl">{playlist.icon}</span> */}
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
                          <p className="text-gray-500">
                            {playlist.description}
                          </p>
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
                  </div>
                ))}
              </div>
            </>
          }
        </div>
      </section>
    </div>
  );
}

export default Playlists;
