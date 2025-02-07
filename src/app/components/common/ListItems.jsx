"use client";
import Image from "next/image";
import { styles } from "../../styles";

export const ListItem = ({ title, image, onClick }) => {
  return (
    <div
      className={`${styles.paddingX} flex items-center p-2 justify-between cursor-pointer hover:bg-gray-200 transition duration-200 font-[poppins]`}
      onClick={onClick}
    >
      <span className="text-sm font-normal leading-6 text-left">{title}</span>
      {image && <Image src={image} alt="right-icon" width={8} height={8} />}
    </div>
  );
};
