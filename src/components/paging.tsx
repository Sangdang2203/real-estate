import * as React from "react";
import { Stack, Pagination } from "@mui/material";

interface PaginationProps {
  data: unknown[];
  rowPerPage: number;
  page: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Paging = ({ data, rowPerPage, page, onPageChange }: PaginationProps) => {
  const count = Math.ceil(data.length / rowPerPage);
  const [dot] = React.useState<string>("...");

  React.useMemo(() => {
    if (count <= 5) {
      return Array.from({ length: count }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [1, 2, 3];
    if (page > 3 && page < count - 1) {
      pages.push(dot);
    }

    if (page > 3) {
      pages.push(page);
    }

    if (count > 3 && page < count - 1) {
      pages.push(dot);
    }

    if (count > 1) {
      pages.push(count);
    }

    return pages;
  }, [count, dot, page]);

  return (
    <div className="flex justify-center items-center overflow-x-auto">
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          onChange={onPageChange}
          showFirstButton
          showLastButton
          siblingCount={0}
        />
      </Stack>
    </div>
  );
};

export default Paging;
