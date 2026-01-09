import portfolio from "../assets/portfolio.jpg";
import taytay from "../assets/taytay.jpg";
import guideurself from "../assets/guideurself.jpg";

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  type: string;
  link: string;
  codelink: string;
  date: string;
}

export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    type: "Frontend",
    description:
      "My portfolio website , created using ReactJS and TailwindCSS.",
    image: portfolio,
    link: "https://nenethss.github.io/KennethSanPedro/",
    codelink: "https://nenethss.github.io/KennethSanPedro/",
    date: "December 23, 2025",
  },
  {
    id: 2,
    title: "E-Tiangge Taytay",
    type: "Fullstack",
    description:
      "A full-stack online product advertisement platform created using MongoDB, React, and Node.js.",
    image: taytay,
    link: "https://taytay-marketplace.netlify.app/",
    codelink: "https://github.com/Nenethss/taytay-marketplace",
    date: "December 23, 2025",
  },
  {
    id: 3,
    title: "GuideURSelf",
    type: "Fullstack",
    description:
      "A university service desk system created using the MERN stack for the web app and Flutter for the mobile application.",
    image: guideurself,
    link: "https://guideurself.com/",
    codelink: "https://github.com/Nenethss/guideurself",
    date: "December 23, 2025",
  },
];
