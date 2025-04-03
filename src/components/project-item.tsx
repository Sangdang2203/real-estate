import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/interfaces";
import { handleShare } from "@/shared/method/methods";
import ShareIcon from "@/icons/ShareIcon";
import ReadmoreIcon from "@/icons/ReadmoreIcon";
import no_image from "@/images/no_image.jpg";
import {
  IconButton,
  Tooltip,
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <Card key={project.id} className="hover:shadow-2xl cursor-pointer">
      <CardHeader
        avatar={
          <Avatar className="bg-red-600 uppercase">
            <Link href={project.projectUrl}>
              <Image src={project.favicon.src} alt={project.favicon.alt} />
            </Link>
          </Avatar>
        }
        title={
          <Link href={project.projectUrl}>{project.name.toUpperCase()}</Link>
        }
        subheader={project.location || ""}
        className="text-red-800 shadow-sm bg-slate-200"
      />
      <CardContent className="grid grid-cols-1">
        <Link href={project.projectUrl}>
          <Image
            src={project.images.length > 0 ? project.images[0].src : no_image}
            alt={project.images[0]?.alt}
            loading="eager"
            title="Press to explore more information."
            className="pb-3 w-full max-h-[180px] md:max-h-[160px]"
          />
        </Link>
        <Tooltip title={project.description}>
          <Typography
            variant="body2"
            className="text-slate-500 text-wrap line-clamp-4 text-justify text-[14px]"
          >
            {project.description || (
              <Typography variant="body2">Đang cập nhật</Typography>
            )}
          </Typography>
        </Tooltip>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          title="Share"
          aria-label="share"
          onClick={() => handleShare(project.projectUrl)}
        >
          <ShareIcon />
        </IconButton>
        <IconButton
          aria-label="read more"
          title="Read more"
          href={project.projectUrl}
        >
          <ReadmoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectItem;
