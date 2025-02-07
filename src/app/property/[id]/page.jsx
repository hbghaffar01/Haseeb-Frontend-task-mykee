"use client";

import { useParams, useRouter } from "next/navigation";
import { propertyList } from "@/app/constant";
import Image from "next/image";
import { Divider } from "../../components/common/Divider";

export default function PropertyPage() {
  const router = useRouter();
  const params = useParams();
  const property = propertyList.find(
    (prop) => prop.id === parseInt(params.id, 10)
  );

  const handleBackClick = () => {
    router.push("/");
  };

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Property not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="size-8 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors cursor-pointer">
        <Image
          src="/arrow-left.svg"
          width={40}
          height={40}
          alt="left arrow"
          onClick={handleBackClick}
        />
      </div>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative h-96 w-full">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {property.images?.map((img, index) => (
              <div key={index} className="relative h-32">
                <Image
                  src={img}
                  alt={`${property.title} - ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {property.title}
            </h1>
            <p className="text-gray-600 mt-2">{property.subtitle}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Type</span>
              <span className="font-semibold text-teal-600">
                {property.type}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Price</span>
              <span className="font-semibold text-red-500 text-xl">
                ${property.price}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Rating</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-2xl ${
                      index < Math.floor(property.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
}
