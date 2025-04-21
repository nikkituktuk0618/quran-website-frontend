/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/common/Loading";
import useNotification from "@/hooks/useNotification";
import { getCaller, postCaller } from "@/lib/apiCaller";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getAllCourses = async() =>{
  const res = await getCaller({
    url:"courses"
  })
  if(res.type === "success"){
    return res.response
  }
  return [];
}

// const getPlaylistByID = async(id) =>{
//   const res = await getCaller({
//     url:"courses"
//   })
//   if(res.type === "success"){
//     return res.response
//   }
//   return [];
// }

const CreatePlaylist = ({close,updateID}:{close?:(val:boolean)=>void,updateID?:number}) => {
  // const {data:playlistData} = useQuery({
  //   queryKey:["courses",updateID],
  //   queryFn:()=>getPlaylistByID(updateID!),
  //   enabled: !!updateID
  //  })
  const {data:courses} = useQuery({
    queryKey:["courses"],
    queryFn:getAllCourses
   })
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    course_id: 0, // Defaulting to the given course_id
    playlist_order: 0, // Default order, can be changed by user
    thumbnail_url: "",
  });

  const {contextHolder,showNotification} = useNotification();

  const handleChange = (e, key) => {
    const value = key === "playlist_order" ? Number(e.target.value) : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async(e) => {
    const payLoad = {
      "course_id": formData.course_id,
      "title": formData.title,
      "playlist_order": formData.playlist_order
    }
    e.preventDefault();
    const res = await postCaller({
      url:"playlists",
      payload:payLoad
    })
    if(res.type === "success"){
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
    
    <div className="w-full p-6 bg-gray-50">
      <p className="text-gray-600 mb-6">Add a new playlist to your course.</p>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter playlist title"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            value={formData.title}
            onChange={(e) => handleChange(e, "title")}
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
            value={formData.description}
            onChange={(e) => handleChange(e, "description")}
          ></textarea>
          <p className="text-gray-500 text-sm">
            Briefly describe what students will learn in this playlist.
          </p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Course</label>
          <select
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            value={formData.course_id}
            onChange={(e) => handleChange(e, "course_id")}
          >
            <option  value="">Select Course</option>
            {
              courses?.map((item,index)=>(
                <option key={index} value={item.id}>{item.title}</option>
              ))
            }
          </select>
          <p className="text-gray-500 text-sm">The course this playlist belongs to.</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Playlist Order</label>
          <input
            type="number"
            placeholder="Enter order number"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            value={formData.playlist_order}
            onChange={(e) => handleChange(e, "playlist_order")}
          />
          <p className="text-gray-500 text-sm">Define the order of this playlist.</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Thumbnail URL</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            value={formData.thumbnail_url}
            onChange={(e) => handleChange(e, "thumbnail_url")}
          />
          <p className="text-gray-500 text-sm">The URL for the playlist thumbnail image.</p>
        </div>
        <div className="flex items-end justify-end space-x-4">
          {close && <button
            type="button"
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => close(false)}
          >
            Cancel
          </button>}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Playlist
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreatePlaylist;
