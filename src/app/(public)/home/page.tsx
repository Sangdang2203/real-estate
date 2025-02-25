"use client";

// import Link from "next/link";
import CarouselPhotos from "./CarouselPhotos";
import ProjectCarousel from "./ProjectCarousel";
import { Button, Paper, Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { projects } from "@/shared/libs/data";
import { countVisitors } from "@/shared/method/methods";
import React from "react";

export default function HomePage() {
  const [visitorCount, setVisitorCount] = React.useState(0);

  React.useEffect(() => {
    setVisitorCount(countVisitors());
  }, []);
  return (
    <div className="">
      {/* Carousel section */}
      <section id="slideshow">
        <CarouselPhotos />
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 slide-up-2">
          <Paper className="pt-4 text-center rounded-lg min-h-[230px]">
            <SupervisedUserCircleIcon
              fontSize="large"
              className="text-[#dec4a7]"
            />
            <Typography variant="h5" className="py-1">
              Lượng khách hàng truy cập
            </Typography>
            <Typography variant="h3" className="text-[#dec4a7]">
              {visitorCount}
            </Typography>
            <Typography variant="body2">
              Theo dõi lượng khách hàng truy cập để tối ưu hóa trải nghiệm.
            </Typography>
          </Paper>
          <Paper className="pt-4 text-center rounded-lg min-h-[230px]">
            <ApartmentIcon fontSize="large" className="text-[#dec4a7]" />
            <Typography variant="h5" className="py-1">
              Dự án bất động sản
            </Typography>
            <Typography variant="h3" className="text-[#dec4a7]">
              {projects.length}
            </Typography>
            <Typography variant="body2">
              Danh sách dự án bất động sản đang triển khai.
            </Typography>
            <Button
              variant="text"
              color="warning"
              className="readMore text-[#dec4a7]"
              href="/projects"
            >
              Xem tất cả
            </Button>
          </Paper>
        </div>
      </section>

      {/* Projects section  */}
      <section id="projects">
        <ProjectCarousel />
      </section>

      <div className="flex justify-center my-10 z-0">
        {/* <Link href="/projects" className="uppercase readMore text-center">
          xem thêm...
        </Link> */}
      </div>

      <section id="contact"></section>
    </div>
  );
}
