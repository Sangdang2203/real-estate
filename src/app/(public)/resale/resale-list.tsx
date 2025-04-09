"use client";

import ResaleItem from "./resale-item";
import React from "react";
import { units } from "@/app/libs/data";
import ItemList from "@/components/ItemList";
import { Typography } from "@mui/material";
import { updatingMessage } from "@/shared/constants";

const ResaleList = () => {
  return (
    <>
      <div className="min-h-screen">
        {units.length > 0 ? (
          <ItemList
            items={units}
            renderItem={(item) => (
              <ResaleItem key={`${item.id}${item.name}`} unit={item} />
            )}
          />
        ) : (
          <Typography className="flex justify-center items-center">
            {updatingMessage}
          </Typography>
        )}
      </div>
    </>
  );
};
export default ResaleList;
