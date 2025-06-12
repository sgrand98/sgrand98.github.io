export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string | string[];
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    title: "Micro-Doppler Based Human Activity Detection under Adverse Outdoor Conditions using Vision Models",
    conference: "Coming",
    authors: ["Sébastien Grand, Charles Piffault, Guillaume Pouget\n" 
             "Bruno Meriaux, Aurelie Montarnal, Frédérick Benaben"],
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  }
];
