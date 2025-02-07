import React from "react";
import Image from "next/image";

export default function ServiceCard({ imgSrc, title, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden p-6 bg-white text-center">
      <div className="flex justify-center mb-4">
        <Image
          src={imgSrc}
          alt={title}
          width={80}
          height={80}
          className="rounded-full"
          priority
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
