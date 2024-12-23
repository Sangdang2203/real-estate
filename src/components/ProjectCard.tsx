// "use client";

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import { projects } from "@/app/libs/data";
// import { IconButton, Container } from "@mui/material";
// import Image from "next/image";

// export default function ProjectCard() {
//   return (
//     <Container>
//       {projects.length > 0 &&
//         projects.map((project) => {
//           return (
//             <Card key={project.id}>
//               <CardHeader
//                 avatar={
//                   <Avatar className="bg-red-500 uppercase">
//                     {project.name.slice(0, 1).toUpperCase()}
//                   </Avatar>
//                 }
//                 title={project.name.toUpperCase()}
//                 subheader={project.location ? project.location : ""}
//                 className="text-red-800"
//               />

//               {/* <CardContent>
//                 <Image
//                   src={project.images[0].url}
//                   alt={project.images[0].alt}
//                 /> */}
//                 <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                   {project.description}
//                 </Typography>
//               </CardContent>
//               <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                   <FavoriteIcon />
//                 </IconButton>
//                 <IconButton aria-label="share" href={project.url}>
//                   <ShareIcon />
//                 </IconButton>
//               </CardActions>
//             </Card>
//           );
//         })}
//     </Container>
//   );
// }
