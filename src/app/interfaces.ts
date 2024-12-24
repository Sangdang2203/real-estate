export interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  location: string;
  images: { id: number; alt: string; src: string }[];
  projectUrl: string;
  details: {
    area: string;
    block: number;
    units: number;
    construction: string;
    facilities: string;
  };
}

export interface InputSearchProps {
  onSearch: (results: Project[]) => void;
}
