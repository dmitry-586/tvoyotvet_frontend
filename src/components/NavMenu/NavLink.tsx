import Image from "next/image";
import Link from "next/link";

interface NavLinkProps {
  src: string;
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ src, href, title }) => {
  return (
    <div className="flex w-full px-3 py-2 items-center gap-[12px]">
      <Image
        src={src}
        alt="LinkImage"
        width="0"
        height="0"
        style={{ width: "16px", height: "16px" }}
      />
      <Link href={href} className="text-[#666687]">
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
