import { StaticImageData } from 'next/image';
import photo from '../../pics/photo.jpg';


export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string | StaticImageData;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sebastien Grand",
  title: "Ph.D. Student",
  institution: "IMT Mines Albi",
  description: `<p style='font-size: larger; text-align: justify;'>Hi there, I am <b>Sébastien Grand</b>!<br><br>
    I'm a 1st year PhD student at <a href='https://www.imt-mines-albi.fr/'>IMT Mines Albi</a>
    working on <b>robust and adaptive Deep Multimodal Fusion</b>.<br><br>
    Previously, I received a <b>M.S in Computer Science and Mathematics</b>, a double diploma from 
    <a href='https://www.enseeiht.fr/fr/formation/formation-ingenieur/departement-sn/programme-sn/parcours-modia.html'>INP ENSEEIHT</a> and
    <a href='https://www.math.insa-toulouse.fr/fr/enseignement/apprentissage-modia.html/'>INSA Toulouse</a> in 2023.<br><br>
    Then, I worked for a year at <a href='https://epsi-radars.fr/'>EPSI Radar</a> at developing Computer Vision classification models for radar data.</p>`,
  email: "sebastien.grand@mines-albi.fr",
  imageUrl: photo,
  githubUsername: "sgrand98",
  linkedinUsername: "sebastien-grand",
  twitterUsername: "_SGrand",
};
