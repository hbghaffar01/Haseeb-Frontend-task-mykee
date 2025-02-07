"use client";

import { useState } from "react";
import { SwiperHeader } from "./SwiperHeader";
import { Card } from "./Card";
import { propertyList } from "@/app/constant";
import CustomSwiper from "./CustomSwiper";
import Button from "./Button";

const BestSelling = () => {
  const itemsToShow = 3;

  return (
    <section className="container mx-auto px-2 my-20">
      <div className="flex items-center justify-between">
        <h3 className="mx-2 text-gray-800 text-xl font-bold my-4">
          Best Selling Properties
        </h3>
      </div>
      <div className="w-full">
        <SwiperHeader
          indicator="By Year"
          heading="Best Selling Properties"
          Button={<Button color="bg-red-500">View All</Button>}
        />
        <CustomSwiper currentIndex={0} itemsToShow={itemsToShow}>
          {propertyList.map((property) => (
            <Card key={property.id} product={property} carousel={true} />
          ))}
        </CustomSwiper>
      </div>
    </section>
  );
};

export default BestSelling;
