import Image from "next/image";

const Services = () => {
  return (
    <div className="p-10">
      <h2 className="text-[22px] font-semibold">Сервисы</h2>
      <div className="w-[780px] h-[480px] bg-white rounded-[20px] mt-5 flex flex-col justify-between">
        <div className="w-full h-[52px] border-b grid grid-cols-3 items-center px-5">
          <div className="flex gap-[15px]">
            <div className="flex gap-[15px] items-center">
              <input type="checkbox" className="hidden" disabled />
              <label className="flex items-center">
                <span className="w-5 h-5 inline-block border border-[#C0C0CF] rounded mr-2 bg-white"></span>
                Name
              </label>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <p>Link</p>
            <Image
              src="/ServicesPage/servicesIcon.svg"
              alt="icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex gap-[10px]">
            <p>Status</p>
            <Image
              src="/ServicesPage/servicesIcon.svg"
              alt="icon"
              width={8}
              height={8}
            />
          </div>
        </div>
        <div></div>
        <button className="w-full h-16 bg-[#F9FBFF] rounded-b-[20px] gap-[15px] flex items-center px-5 border-t">
          <div className="w-6 h-6 bg-white flex justify-center items-center rounded-full">
            <Image
              src="/ServicesPage/Add.svg"
              alt="addIcon"
              width={10}
              height={10}
            />
          </div>
          <p>Добавить сервис</p>
        </button>
      </div>
    </div>
  );
};

export default Services;
