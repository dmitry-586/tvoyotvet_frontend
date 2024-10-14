import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-[72px] flex items-center border border-[#EFF0F6] bg-white">
      <div className="relative w-[230px] h-[72px] flex items-center border border-[#EFF0F6] pl-3">
        <div className="flex gap-2 items-center ">
          <span className="w-8 h-8 bg-[#EFF0F6] rounded-[4px]" />
          <h1 className="leading-none text-sm">
            Твой
            <br />
            Ответ
          </h1>
        </div>
        <button className="w-4 h-7 border rounded-sm border-[#EFF0F6] flex justify-center items-center absolute right-[-8px] bg-white">
          <Image
            src="/navMenu/arrowLeft.svg"
            width={6}
            height={9}
            alt="arrow"
          />
        </button>
      </div>
      <div className="flex-1 flex justify-between items-center py-4 px-10 ">
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
            className="w-10 h-10 flex justify-center items-center bg-[#D8D8D8] rounded-full"
          >
            <Image src="/Header/User.png" alt="User" width={38} height={38} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
