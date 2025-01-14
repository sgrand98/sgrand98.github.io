export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string | string[];
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2023-2024",
    title: "Research Engineer",
    company: "EPSI Radar",
    description: [
      "Classification of human activities vs. environment, based on micro-Doppler radar signals, leveraging Convolutional Neural Networks (CNNs) for robust spectrum-based classification.\n\n",
      "• Developed an ML for human activity detection based on micro-Doppler spectrum classification using Convolutional Neural Networks (CNNs). \n",
      "• Improvement in detection performance compared with the previous model. \n",
      "• Development of the inference pipeline in C++ using ONNXruntime for further deployment.",
    ],
    manager: "Bruno Mériaux, Ph.D",
    companyUrl: "https://epsi-radars.fr/"
  },
  
  {
    date: "Aug. 2022 - Feb. 2023",
    title: "Research Intern (Master Thesis)",
    company: "Hensoldt Analytics",
    description: [
      "• Generated robust motion maps based on videos captured by UAV cameras to feed an object detector and improve its performance at detecting drones. \n" ,
      "• Developed motion compensation algorithm using Panoramic View building (Image stitching), motion extraction algorithm using Robust PCA, and addition of the motion map to the RGB frame to improve drone detection. \n" ,
      "• Modified YOLOX (object detector) architecture to add the motion map as a new feature. \n" ,
      "• Enhanced motion extraction algorithm and improved object detector performance with the addition of the motion map as a new feature."
    ],
    advisor: "Jonathan Kobold, Ph.D",
    companyUrl: "https://analytics.hensoldt.net/company/",
  },
];
