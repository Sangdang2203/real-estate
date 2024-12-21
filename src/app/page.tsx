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
import { Grid, IconButton } from "@mui/material";
import { projects } from "./libs/data";
import TheHeaderComponent from "@/components/TheHeader";

export default function Home() {
  return (
    <>
      <header>
        <TheHeaderComponent />
      </header>

      <section id="slideshow"></section>

      <section id="projects">
        <Grid container>
          <Grid item xs={12} md={4} lg={3}>
            {projects.length > 0
              ? projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{
                            bgcolor: red[500],
                            textTransform: "lowercase",
                          }}
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
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
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
                ))
              : ""}
          </Grid>
        </Grid>
      </section>

      <section id="contact"></section>

      <footer>
        <h1>THE FOOTER COMPONENT</h1>
      </footer>
    </>
  );
}
