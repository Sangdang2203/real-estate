import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  location: string;
  images: { alt: string; src: StaticImageData }[];
  projectUrl: string;
}

export interface InputSearchProps {
  onSearch: (results: Project[]) => void;
}
