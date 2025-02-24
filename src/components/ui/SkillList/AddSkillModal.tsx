"use client"
import React, { useState } from "react";
import CustomModal from "../../shared/Modal";

const AddSkillModal = () => {
    const [formData, setFormData] = useState({
    title: "",
    image: null as File | null,
    });

    const handleAddSkills = async(e:any)=>{
        e.preventDefault();
        console.log(formData);
        
    }


  return (
    <>
      <CustomModal modalButton="Add Skill" modalTitle="Add Skill">
        <form onSubmit={handleAddSkills} className="space-y-4">
          {/* Title Input */}
          <div>
            <label htmlFor="skill-title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="skill-title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter Skill Title"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
            <div>
          {/* Image URL Input */}
            <label htmlFor="image-url" className="block text-sm font-medium text-gray-700">
              Image 
            </label>
            <input
              id="image-url"
              type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFormData({ ...formData, image: e.target.files[0] });
              }
            }}
              placeholder="Enter Image URL"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            
          </div>
          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Skill
            </button>
          </div>
        </form>
      </CustomModal>
    </>
  );
};

export default AddSkillModal;
