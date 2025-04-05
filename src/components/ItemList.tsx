"use client";

import Paging from "@/components/Pagination";
import { Typography } from "@mui/material";
import React, { ReactNode } from "react";
import ReturnButton from "./ReturnButton";

interface ListItemProps {
  id: string | number; // assuming every item has a unique id
  // Add other item-specific properties as needed
}

interface ListProps<T extends ListItemProps> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  emptyMessage?: string;
  desktopPerPage?: number;
  mobilePerPage?: number;
}

const ItemList = <T extends ListItemProps>({
  items,
  renderItem,
  emptyMessage = "Không tìm thấy kết quả phù hợp",
  desktopPerPage = 8,
  mobilePerPage = 5,
}: ListProps<T>) => {
  const [filteredItems, setFilteredItems] = React.useState<T[]>(items);
  const [isMobile, setIsMobile] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const indexOfLastItem =
    currentPage * (isMobile ? mobilePerPage : desktopPerPage);
  const indexOfFirstItem =
    indexOfLastItem - (isMobile ? mobilePerPage : desktopPerPage);
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div key={item.id}>{renderItem(item)}</div>
            ))
          ) : (
            <Typography variant="body2" className="uppercase text-red-500">
              {emptyMessage}
            </Typography>
          )}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Paging
          data={filteredItems}
          rowPerPage={isMobile ? mobilePerPage : desktopPerPage}
          page={currentPage}
          onPageChange={(event, value) => setCurrentPage(value)}
        />
      </div>

      <ReturnButton />
    </>
  );
};

export default ItemList;
