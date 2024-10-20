"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { m } from "framer-motion";
import HeaderInputs from "./HeaderInputs";

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
          <Image src="/Header/User.svg" alt="User" width={38} height={38} />
        </Link>
      </div>
      <m.div
        initial={{ width: 565, right: 0, zIndex: 10, display: "none" }}
        animate={{
          right: isCollapsed ? 0 : -565,
          display: isCollapsed ? "block" : "none",
        }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 23,
        }}
        className="w-full h-screen z-10 bg-white absolute top-0"
      >
        <div className="flex justify-between h-[72px] items-center py-6 px-5 border-b">
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
        <div className="flex flex-col justify-center items-center">
          <div className="w-[138px] h-[138px] flex justify-center items-center bg-[#D8D8D8] rounded-full mt-5">
            <Image src="/Header/User.svg" alt="User" width={115} height={115} />
          </div>
          <button className="flex gap-2 w-[182px] h-10 border rounded-[20px] justify-center items-center mt-[14px]">
            Загрузить фото
            <Image
              src="/Header/UploadSimple.svg"
              alt="upload"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className="px-5 flex justify-between w-full mt-[30px]">
          <HeaderInputs
            titles={["Имя*", "Телефон*", "Компания"]}
            placeholders={["ФИО", "Номер телефона", "Название компании"]}
            placeholdersImage={[
              "/Header/User_fill.svg",
              "/Header/PhoneCall.svg",
              "/Header/Briefcase.svg",
            ]}
          />
          <HeaderInputs
            titles={["Email*", "Адрес", "Должность"]}
            placeholders={[
              "Email address",
              "Текущее местоположение",
              "Название должности",
            ]}
            placeholdersImage={[
              "/Header/Envelope.svg",
              "/Header/MapPinLine.svg",
              "/Header/Flag_fill.svg",
            ]}
          />
        </div>
      </m.div>
    </div>
  );
};

export default HeaderTop;
