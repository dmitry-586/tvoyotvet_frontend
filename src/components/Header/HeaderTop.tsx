"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Profile from "./Profile";

const HeaderTop = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="flex bg-white h-[72px] justify-between items-center py-4 px-10 relative">
      <div className="flex items-center gap-4">
        <Link href={"/"}>
          <Image
            src="/Header/Notification.svg"
            alt="Notification"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href={"/"}
          onClick={toggleSidebar}
          className="w-10 h-10 flex justify-center items-center bg-[#D8D8D8] rounded-full"
        >
          <Image src="/Header/User.svg" alt="User" width={38} height={38} />
        </Link>
      </div>
      <Profile isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default HeaderTop;
