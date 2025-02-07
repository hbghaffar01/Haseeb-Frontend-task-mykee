"use client";

import { useState, useEffect, useMemo } from "react";
import { SearchInput } from "./SearchInput";
import { Search } from "@/assets";
import { SwiperHeader } from "./SwiperHeader";
import { Card } from "./Card";
import { propertyList } from "@/app/constant";
import CustomSwiper from "./CustomSwiper";

const Property = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const filteredProperties = useMemo(() => {
    if (!searchValue.trim()) return propertyList;

    const searchTerm = searchValue.toLowerCase().trim();
    return propertyList.filter((property) => {
      return (
        property.code?.toLowerCase().includes(searchTerm) ||
        property.developer?.toLowerCase().includes(searchTerm) ||
        property.building?.toLowerCase().includes(searchTerm) ||
        property.community?.toLowerCase().includes(searchTerm) ||
        property.title?.toLowerCase().includes(searchTerm) ||
        property.description?.toLowerCase().includes(searchTerm)
      );
    });
  }, [searchValue]);

  const totalItems = filteredProperties.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [searchValue]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < totalItems - itemsToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setCurrentIndex(0);
  };

  return (
    <section className="container mx-auto px-2 my-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h3 className="mx-2 text-gray-800 text-xl font-bold">
          Properties listing
        </h3>
        <SearchInput
          placeholder="Property code, developer, building or community"
          value={searchValue}
          onChange={handleSearch}
          icon={Search}
          className="bg-gray-100 border border-gray-300 w-full md:w-[300px] h-12"
        />
      </div>
      <div className="w-full mt-8">
        <SwiperHeader
          indicator="This Month"
          heading="Best Selling Properties"
          onNext={handleNext}
          onPrev={handlePrev}
        />
        <div className="mt-8">
          {filteredProperties.length > 0 ? (
            <CustomSwiper currentIndex={currentIndex} itemsToShow={itemsToShow}>
              {filteredProperties.map((property) => (
                <Card
                  key={property.id}
                  product={property}
                  carousel={false}
                  showArrows={true}
                  className="w-full"
                />
              ))}
            </CustomSwiper>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No properties found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Property;
