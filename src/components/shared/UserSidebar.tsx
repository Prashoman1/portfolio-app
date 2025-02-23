"use client";
import React from "react";
import SidebarLink from "./SidebarLink";
import {
 
    FiBookmark,
  
    FiHome,
    FiInfo,
    FiSettings,
    FiTag,
  } from "react-icons/fi";

const UserSidebar = () => {
  return (
    <>
      <aside className="w-[15%] fixed left-5 max-h-[calc(100vh-20vh)] top-[20%] group overflow-hidden hover:overflow-y-auto transition-all duration-300 pb-5 custom-scrollbar shadow-xl">
        <nav className="space-y-3">
          <>
            <SidebarLink
              href="/Dashboard"
              icon={FiHome}
              label="Dashboard"
              activePaths={["/Dashboard"]}
            />
            <SidebarLink
              href="/Dashboard/about"
              icon={FiBookmark}
              label="About"
              activePaths={["/Dashboard/about"]}
            />
            <SidebarLink
              href="/Dashboard/admin/tag"
              icon={FiTag}
              label="Tags"
              activePaths={["/Dashboard/admin/tag"]}
            />

            <SidebarLink
              href="/Dashboard/admin/profile"
              icon={FiSettings}
              label="Manage Profile"
              activePaths={["/Dashboard/Admin/profile"]}
            />
          </>
        </nav>
      </aside>
    </>
  );
};

export default UserSidebar;
