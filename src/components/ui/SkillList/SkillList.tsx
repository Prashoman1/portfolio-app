"use client"
import React from 'react';


import CustomModal from '../../shared/Modal';
import AddSkillModal from './AddSkillModal';

const SkillList = () => {
    const tableHeadings = [
        { title: "SI", key: "si" },
        { title: "Skill Image", key: "title" },
        { title: "Skill Title", key: "description" },
        { title: "Options", key: "options" },
    ];

    const tableData = [
        { si: 1, title: "Web Development", description: "Frontend & Backend", options: "Edit | Delete" },
        { si: 2, title: "Graphic Design", description: "UI/UX & Branding", options: "Edit | Delete" },
        { si: 3, title: "Digital Marketing", description: "SEO & Social Media", options: "Edit | Delete" },
    ];

    return (
        <div className="w-full h-full p-4">
            <div className='flex justify-between items-center mb-4'>
            <h1 className="text-xl font-bold mb-4">Category List</h1>
            <AddSkillModal />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-md">
                    <thead>
                        <tr className="bg-gray-200">
                            {tableHeadings.map((heading, index) => (
                                <th key={index} className="border p-2 text-left">
                                    {heading.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className="border-b">
                                {/* {tableHeadings.map((heading, i) => (
                                    <td key={i} className="border p-2">
                                        {row.}
                                    </td>
                                ))} */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SkillList;


