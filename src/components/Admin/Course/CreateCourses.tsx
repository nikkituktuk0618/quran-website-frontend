import React from "react";

const CreateCourse = ({setCreateCourses}) => {
  return (
    <div className="w-full p-6 bg-gray-50 ">
      <h1 className="text-2xl font-bold">Create New Course</h1>
      <p className="text-gray-600 mb-6">
        Add a new course to your educational platform.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Course Title</label>
          <input
            type="text"
            placeholder="e.g., Complete Web Development Bootcamp"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          <p className="text-gray-500 text-sm">
            The name of your course as it will appear to students.
          </p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Course Description</label>
          <textarea
            placeholder="Describe what students will learn in this course..."
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            rows={4}
          ></textarea>
          <p className="text-gray-500 text-sm">
            A detailed description of the course content and learning outcomes.
          </p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Thumbnail URL</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          <p className="text-gray-500 text-sm">
            URL to an image that represents your course (optional).
          </p>
        </div>
        <div className="flex items-end justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            onClick={()=>setCreateCourses(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;