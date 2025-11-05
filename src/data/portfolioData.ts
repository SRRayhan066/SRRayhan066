import { BiLogoCss3, BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { DiMongodb, DiRedis } from "react-icons/di";
import {
  FaBitbucket,
  FaCogs,
  FaConfluence,
  FaFacebookSquare,
  FaGitAlt,
  FaLinkedin,
} from "react-icons/fa";
import {
  FaDatabase,
  FaHtml5,
  FaJava,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
  FaSquareGithub,
} from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { IoLogoMedium } from "react-icons/io5";
import { PiFileCppDuotone, PiShareNetwork } from "react-icons/pi";
import { RiTailwindCssFill, RiTeamLine } from "react-icons/ri";
import {
  SiCodechef,
  SiCodeforces,
  SiExpress,
  SiJira,
  SiLeetcode,
  SiMysql,
  SiNextdotjs,
  SiRedis,
  SiStopstalk,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";

export const aboutMe = {
  name: "S R Rayhan",
  tagLine: "Code. Design. Build. Inspire.",
  growth: {
    title: "System Booting...",
    progressBar: "████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
  },
  infoTags: [
    "Associate Software Engineer",
    "Dhaka, Bangladesh",
    "English & Bangla",
    "Curious Mind",
    "Growth > Perfection",
  ],
  socialTags: [
    { name: "Linked In", icon: FaLinkedin },
    { name: "Facebook", icon: FaFacebookSquare },
    { name: "Medium", icon: IoLogoMedium },
    { name: "Github", icon: FaSquareGithub },
  ],
};

export const programmingProfiles = [
  { name: "Codeforces", icon: SiCodeforces },
  { name: "Codechef", icon: SiCodechef },
  { name: "LeetCode", icon: SiLeetcode },
];

export const experiences = [
  {
    title: "Associate Software Engineer",
    company: "ShellBeeHaken Ltd",
    duration: "June, 2025 - Present",
  },
  {
    title: "Intern Software Engineer",
    company: "ShellBeeHaken Ltd",
    duration: "December, 2024 - May, 2025",
  },
];

export const skillSet = [
  {
    title: {
      icon: FaLaptopCode,
      name: "Frontend Development",
    },
    skills: [
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: FaReact,
        name: "React.js",
      },
      {
        icon: BiLogoTypescript,
        name: "TypeScript",
      },
      {
        icon: FaHtml5,
        name: "HTML5",
      },
      {
        icon: BiLogoCss3,
        name: "CSS3",
      },
      {
        icon: RiTailwindCssFill,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: {
      icon: FaCogs,
      name: "Backend Development",
    },
    skills: [
      {
        icon: FaNodeJs,
        name: "Node.js",
      },
      {
        icon: SiExpress,
        name: "Express.js",
      },
      {
        icon: PiShareNetwork,
        name: "REST APIs",
      },
    ],
  },
  {
    title: {
      icon: FaDatabase,
      name: "Database & Storage",
    },
    skills: [
      {
        icon: DiMongodb,
        name: "MongoDB",
      },
      {
        icon: SiMysql,
        name: "MySQL",
      },
      {
        icon: BiLogoFirebase,
        name: "Firebase",
      },
      {
        icon: SiRedis,
        name: "Redis",
      },
    ],
  },
  {
    title: {
      icon: RiTeamLine,
      name: "Team Collaboration",
    },
    skills: [
      {
        icon: FaGitAlt,
        name: "Git",
      },
      {
        icon: FaSquareGithub,
        name: "GitHub",
      },
      {
        icon: FaBitbucket,
        name: "BitBucket",
      },
      {
        icon: SiJira,
        name: "Jira",
      },
      {
        icon: FaConfluence,
        name: "Confluence",
      },
    ],
  },
  {
    title: {
      icon: GrTechnology,
      name: "Additional Languages & Technologies",
    },
    skills: [
      {
        icon: PiFileCppDuotone,
        name: "C++",
      },
      {
        icon: FaJava,
        name: "Java",
      },
      {
        icon: TbBrandSocketIo,
        name: "Socket.io",
      },
    ],
  },
];

export const projects = [
  {
    title: "Iron Man",
    image: "/ironman.bmp",
    tags: ["C++", "igraphics.h"],
    url: "",
  },
  {
    title: "Link's Adventure: A Lone Warrior",
    image: "/adventure.png",
    tags: ["Java", "LibGDX"],
    url: "",
  },
  {
    title: "Tic Tac Toe",
    image: "/tictactoe.jpg",
    tags: ["AI", "Minimax", "C++"],
    url: "",
  },
  {
    title: "Office Room",
    image: "/tictactoe.jpg", // need to change
    tags: ["Java", "Android", "Firebase"],
    url: "",
  },
  {
    title: "SUST Football Tournament Management System",
    image: "/ftms.png",
    tags: ["React.js", "Node.js", "MySQL"],
    url: "",
  },
  {
    title: "DNCC Waste Management",
    image: "/dncc.png",
    tags: ["React.js", "Node.js", "MySQL"],
    url: "",
  },
  {
    title: "Project Pulse",
    image: "/projectPulse.png",
    tags: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
    url: "",
  },
  {
    title: "Portfolio",
    image: "/adventure.png", // need to change
    tags: ["Next.js", "Tailwind CSS"],
    url: "",
  },
];
