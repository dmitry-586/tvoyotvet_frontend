import React from "react";
import NavLink from "./NavLink";
import MenuData from "./menuData";

const NavMenu = () => {
  const menu = MenuData();
  return (
    <nav className="w-[230px] h-screen border border-[#EFF0F6] bg-white flex flex-col pr-4 pl-[10px] py-[10px]">
      {menu.map((item) => (
        <NavLink
          key={item.id}
          href={item.href}
          src={item.src}
          title={item.title}
        />
      ))}
    </nav>
  );
};

export default NavMenu;
