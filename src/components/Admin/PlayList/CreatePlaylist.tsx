import React from "react";

const CreatePlaylist = ({close}) => {
  return (
    <div className="w-full p-6 bg-gray-50">
      {/* <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
          ≡
        </div>
        <h1 className="text-2xl font-bold">Create Playlist</h1>
      </div> */}
      <p className="text-gray-600 mb-6">Add a new playlist to your course.</p>
      <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter playlist title"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          <p className="text-gray-500 text-sm">
            The title of your playlist will be displayed to students.
          </p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            placeholder="Enter playlist description"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            rows={4}
          ></textarea>
          <p className="text-gray-500 text-sm">
            Briefly describe what students will learn in this playlist.
          </p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Course</label>
          <select className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300">
            <option>Select a course for this playlist</option>
          </select>
          <p className="text-gray-500 text-sm">The course this playlist belongs to.</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Thumbnail URL</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          <p className="text-gray-500 text-sm">The URL for the playlist thumbnail image.</p>
        </div>
        <div className="flex items-end justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            onClick={()=>close(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Playlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePlaylist;