/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from "next/image";

export interface ApiResponse {
  ok: boolean;
  status: string;
  message: string;
  data: any;
}

export interface CustomerMessage {
  name: string;
  email: string;
  phone: string;
  projects: string[];
  message: string;
  createdDate: string;
}

export interface Project {
  id: number;
  name: string;
  developer: string;
  type: string;
  description: string;
  location: string;
  images: { alt: string; src: StaticImageData }[];
  projectUrl: string;
}

export interface InputSearchProps {
  onSearch: (results: Project[]) => void;
}
