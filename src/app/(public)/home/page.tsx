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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <Paper className="pt-4 text-center rounded-lg min-h-[230px]">
            <SupervisedUserCircleIcon
              fontSize="large"
              className="text-[#8b5a3e]"
            />
            <Typography variant="h5" className="py-1">
              Lượng khách hàng truy cập
            </Typography>
            <Typography variant="h3" className="text-[#8b5a3e]">
              {visitorCount}
            </Typography>
            <Typography variant="body2">
              Theo dõi lượng khách hàng truy cập để tối ưu hóa trải nghiệm.
            </Typography>
          </Paper>
          <Paper className="pt-4 text-center rounded-lg min-h-[230px]">
            <ApartmentIcon fontSize="large" className="text-[#8b5a3e]" />
            <Typography variant="h5" className="py-1">
              Dự án bất động sản
            </Typography>
            <Typography variant="h3" className="text-[#8b5a3e]">
              {projects.length}
            </Typography>
            <Typography variant="body2">
              Danh sách dự án bất động sản đang triển khai.
            </Typography>
            <Button
              variant="text"
              style={{ color: "#8b5a3e" }}
              className="readMore"
              href="/projects"
            >
              Xem tất cả
            </Button>
          </Paper>
        </div>
      </section>

      {/* Projects section  */}
      <section id="projects" className="my-10">
        <ProjectCarousel />
      </section>
    </div>
  );
}
