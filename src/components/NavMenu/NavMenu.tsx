import React from "react";
import NavLink from "./NavLink";
import MenuData from "./menuData";
import { color, m } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavMenuProps {
  isCollapsed: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ isCollapsed }) => {
  const menu = MenuData();
  const pathname = usePathname();

  return (
    <m.nav
      initial={{ width: 230 }}
      animate={{ width: isCollapsed ? 63 : 230 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 23,
      }}
      className={`w-[230px] h-screen gap-2 border border-[#EFF0F6] bg-white flex flex-col py-3 px-[10px]`}
    >
      {menu.map((item) => (
        <NavLink
          className={`${isCollapsed ? "justify-center" : ""} ${
            pathname == item.href ? "bg-[#EAEAEF]" : ""
          }`}
          linkStyles={`${
            pathname == item.href ? "text-black font-semibold" : ""
          }`}
          key={item.id}
          href={item.href}
          src={item.src}
          title={item.title}
          isCollapsed={isCollapsed}
          size={`${pathname == item.href ? "24px" : "16px"}`}
        />
      ))}
    </m.nav>
  );
};

export default NavMenu;
