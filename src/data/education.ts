export interface Education {
  year: string;
  institution: string;
  degree: string;
  description?: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  honors?: string;
}

export const educationData: Education[] = [
  {
    degree: "Ph.D. Student in Machine Learning and Computer Vision",
    institution: "IMT Mines Albi",
    year: "2024 - Present",
    // description: "<p style='font-size: larger;'>Working on robust and adaptive Deep Multimodal Fusion.</p>"
  },
  {
    degree: "M.S. in Computer Science and Mathematics",
    institution: "INP ENSEEIHT",
    year: "2019 - 2023",
    honors: "Highest thesis grade"
  },
  {
    degree: "B.S. in Computer Science",
    institution: "University of Toulouse 3 Paul Sabatier",
    year: "2016 - 2019",
    honors: "Top of the class"
  }
];
