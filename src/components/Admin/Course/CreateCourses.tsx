import useNotification from "@/hooks/useNotification";
import { postCaller } from "@/lib/apiCaller";
import React, { useState } from "react";

const initalState = {
  title: "",
    description: "",
    feeamount: 0,
    feetype: "",
    createdby: 0,
}

const CreateCourse = ({ setCreateCourses,refetch }) => {
  const [formData, setFormData] = useState(initalState);
  const {contextHolder,showNotification} = useNotification();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    key: string
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      description: formData.description,
      fee_amount: Number(formData.feeamount),
      fee_type: formData.feetype,
      created_by: 1,
    };
    const res = await postCaller({
      url: "courses",
      payload: payload,
    });
    if (res.type === "success") {
      setFormData(initalState)
      showNotification(
        "success",
        "Success",
        "Course created successfully"
      )
      setTimeout(()=>{
        refetch()
        setCreateCourses((prev)=>!prev)
      },1000)
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
    
    <div className="w-full p-6 bg-gray-50 ">
      <h1 className="text-2xl font-bold">Create New Course</h1>
      <p className="text-gray-600 mb-6">
        Add a new course to your educational platform.
      </p>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-gray-700 font-medium">
            Course Title
          </label>
          <input
            type="text"
            placeholder="e.g., Complete Web Development Bootcamp"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={(e) => handleChange(e, "title")}
          />
          <p className="text-gray-500 text-sm">
            The name of your course as it will appear to students.
          </p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">
            Course Description
          </label>
          <textarea
            placeholder="Describe what students will learn in this course..."
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            rows={4}
            onChange={(e) => handleChange(e, "description")}
          ></textarea>
          <p className="text-gray-500 text-sm">
            A detailed description of the course content and learning outcomes.
          </p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Amount</label>
          <input
            type="number"
            placeholder="250"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={(e) => handleChange(e, "feeamount")}
          />
          <p className="text-gray-500 text-sm">Enter amount for the course</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Fees type</label>
          <select
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={(e) => handleChange(e, "feetype")}
          >
            <option value="monthly">Monthly</option>
            <option value="one-time">One-Time</option>
          </select>
        </div>
        <div className="flex items-end justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setCreateCourses(false)}
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
    </>
  );
};

export default CreateCourse;
