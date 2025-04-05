"use client";

import ResaleItem from "./resale-item";
import React from "react";
import { units } from "@/app/libs/data";
import ItemList from "@/components/ItemList";

const ResaleList = () => {
  return (
    <>
      <div className="min-h-screen">
        <ItemList
          items={units}
          renderItem={(item) => (
            <ResaleItem key={`${item.id}${item.name}`} unit={item} />
          )}
        />
      </div>
    </>
  );
};
export default ResaleList;
