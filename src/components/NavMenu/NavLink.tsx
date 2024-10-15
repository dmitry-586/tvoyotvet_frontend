import Image from "next/image";
import Link from "next/link";

interface NavLinkProps {
  src: string;
  href: string;
  title: string;
  className: string;
  isCollapsed: boolean;
  linkStyles: string;
  size: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  src,
  href,
  title,
  className,
  isCollapsed,
  linkStyles,
  size,
}) => {
  return (
    <Link
      href={href}
      className={`flex w-full py-2 px-3 items-center gap-3 rounded cursor-pointer hover:bg-[#EAEAEF] ${className}`}
    >
      <Image
        src={src}
        alt="LinkImage"
        width="0"
        height="0"
        style={{ width: size, height: size }}
      />
      {isCollapsed ? null : (
        <p className={`text-[#666687] ${linkStyles}`}>{title}</p>
      )}
    </Link>
  );
};

export default NavLink;
