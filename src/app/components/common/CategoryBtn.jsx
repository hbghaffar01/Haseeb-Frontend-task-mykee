import { useState } from "react";
import Image from "next/image";
import { camera } from "../../assets";

export default function CategoryBtn({ categories }) {
  if (!categories) return null;

  return (
    <div className="flex items-center justify-between flex-wrap gap-4 bg-white my-10">
      {categories.map((category) => {
        const [imgSrc, setImgSrc] = useState(category.image || camera);
        
        const handleError = () => {
          setImgSrc(camera);
        };

        return (
          <button
            key={category.id}
            className="flex items-center justify-center relative flex-col gap-2 font-normal w-44 h-44 rounded-lg overflow-hidden shadow-md transition-all duration-300 border hover:text-white"
          >
            <Image
              src={imgSrc}
              alt={category?.name ?? "icon"}
              layout="responsive"
              width="100"
              height="100"
              className={imgSrc?.src?.includes('camera') ? '!size-14' : 'inset-0 object-cover transition-colors duration-300'}
              onError={handleError}
            />
            <span className="absolute bottom-3 text-red-500 font-semibold text-xl">
              {category.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
