"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { projects } from "@/app/libs/data";
import { IconButton, Container } from "@mui/material";

export default function ProjectCard() {
  return (
    <Container>
      {projects.length > 0 &&
        projects.map((project) => {
          return (
            <Card key={project.id}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500], textTransform: "lowercase" }}
                    aria-label="recipe"
                  >
                    {project.name.slice(0, 1)}
                  </Avatar>
                }
                title={project.name.toUpperCase()}
                subheader={project.location ? project.location : ""}
                sx={{
                  color: "red",
                }}
              />
              <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" href={project.url}>
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        })}
    </Container>
  );
}
