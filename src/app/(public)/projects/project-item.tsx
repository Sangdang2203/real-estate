import * as React from "react";
import { Project } from "@/app/interfaces";
import ItemCard from "@/components/ItemCard";

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return <ItemCard item={project} />;
};

export default ProjectItem;
