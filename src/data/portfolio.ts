import { StaticImageData } from 'next/image';
import example from '../../pics/ex.png';

export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string | StaticImageData;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Generating Robust Motion Maps to Improve Object Detector Performance",
    description:
      "This report presents the work I realised during my master thesis at Hensoldt Analytics, in Munich, Germany",
    technologies: ["Python", "PyTorch", "OpenCV"],
    projectUrl: "https://github.com/SebastienGrand98/MasterThesis/blob/main/master_thesis.pdf",
    imageUrl: example,
  },
];
