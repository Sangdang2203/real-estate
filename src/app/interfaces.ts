/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from "next/image";

export interface ImageProp {
  src: string | StaticImageData;
  alt: string;
  title: string;
}

export interface NavLink {
  path: string;
  name: string;
}

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
  projectUrl: string;
  developer: string;
  type: string;
  description: string;
  location: string;
  productType: string;
  area: string;
  unitType: string;
  handover: string;
  owner: string;
  status: string;
  images: ImageProp[];
  favicon: ImageProp;
}

export interface Unit {
  id: number;
  name: string;
  projectUrl: string;
  description: string;
  images: ImageProp[];
  price: string;
  currency: string;
  status: string;
}

export interface InputSearchProps {
  onSearch: (results: Project[]) => void;
}
