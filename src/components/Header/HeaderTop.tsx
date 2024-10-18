"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { m } from "framer-motion";

const HeaderTop = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="flex bg-white h-[72px] justify-between items-center py-4 px-10 relative">
      <p>поиск</p>
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
          <Image src="/Header/User.png" alt="User" width={38} height={38} />
        </Link>
      </div>
      <m.div
        initial={{ width: 0, right: 0, zIndex: 0, display: "none" }}
        animate={{
          width: isCollapsed ? 565 : 0,
          display: isCollapsed ? "block" : "none",
          zIndex: isCollapsed ? 10 : 0,
        }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 23,
        }}
        className="w-full h-screen z-10 bg-white absolute top-0 px-5 py-6"
      >
        <div className="flex justify-between items-center">
          <p>Настройки профиля</p>
          <Image
            src="/Header/X.svg"
            alt="close"
            width={16}
            height={16}
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        </div>
      </m.div>
    </div>
  );
};

export default HeaderTop;
