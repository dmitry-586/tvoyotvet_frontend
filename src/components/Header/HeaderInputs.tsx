"use client";

import React from "react";
import "../../app/globals.css";
import { ProfileFormData } from "@/interfaces/interfaces";

const HeaderInputs: React.FC<ProfileFormData> = ({
  titles,
  placeholders,
  placeholdersImage,
}) => {
  const inputData = titles.map((title, index) => ({
    title,
    placeholder: placeholders[index],
    name: `input${index + 1}`,
    placeholderImage: placeholdersImage[index],
  }));

  return (
    <form className="flex flex-col gap-[14px] w-[250px]">
      {inputData.map((input, index) => (
        <div key={index} className="input-container">
          <label className="flex flex-col gap-2">
            {input.title}:
            <input
              type="text"
              name={input.name}
              placeholder={input.placeholder}
              className="border w-full h-10 rounded pl-[10px] text-sm image-placeholder"
              style={{ backgroundImage: `url(${input.placeholderImage})` }}
            />
          </label>
        </div>
      ))}
    </form>
  );
};

export default HeaderInputs;
