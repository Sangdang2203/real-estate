"use client";

import { projects } from "@/shared/libs/data";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
// import haus from "../../assets/images/haus_dalat/haus_dalat_1.jpg";

export default function HausDalat() {
  const project = projects.find(
    (project) => project.projectUrl === "/haus-dalat"
  );

  const photos = [
    {
      id: 1,
      name: "",
      src: "../../assets/images/haus_dalat/haus_dalat_1.jpg",
    },
    // {
    //   id: 2,
    //   name: "",
    //   src: "https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682804.jpg",
    // },
  ];

  return (
    <Container>
      {photos.length > 0 &&
        photos.map((photo) => {
          return (
            <Image
              key={photo.id}
              src={photo.src}
              width={600}
              height={400}
              alt={photo.name}
            />
          );
        })}
      {project ? (
        <h1 className="capitalize z-50">{project.name}</h1>
      ) : (
        <div className="flex justify-center items-center">
          <Typography variant="body2" className="capitalize">
            đang cập nhật ...
          </Typography>
        </div>
      )}
    </Container>
  );
}
