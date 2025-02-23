import React from "react";
import UserSidebar from "../../../../components/shared/UserSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
     <div className="flex">
        <div className="w-[20%] h-screen max-h-screen overflow-hidden relative">
          <UserSidebar />
        </div>
        <div className="w-[80%]">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
