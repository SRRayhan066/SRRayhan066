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
  { name: "Stopstalk", icon: SiStopstalk },
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
    description:
      "This one's a throwback to my second semester of university! I poured a ton of effort into creating this 2D, one-on-one fighting game. You get to play as a hero with the ability to fly and shoot lasers, including a super-charged 'ultra laser' for tight spots. I designed three levels, each with its own boss. You'll have to take down 'Ultron' and 'Doom'—two villains who can also fly and shoot back—before you face the ultimate baddie, 'Thanos'. It was a huge learning experience and a lot of fun to build.",
    url: "",
  },
  {
    title: "Link's Adventure: A Lone Warrior",
    image: "/adventure.png",
    tags: ["Java", "LibGDX"],
    description:
      "Alright, this was my big 3rd-semester project: 'Link's Adventure: A Lone Warrior'! It's a 2D game where you step into the shoes of Link, on a crucial quest to rescue the princess. But it's not going to be easy! You'll need to navigate a dense jungle, defeat formidable guards, and collect their souls. On top of that, there are three unique keys hidden across the map that you'll need to find. Link comes prepared with a trusty sword for close combat, five strategic bombs, and three lives to see him through this epic journey. It was a challenging but incredibly rewarding experience to bring this adventure to life.",
    url: "",
  },
  {
    title: "Tic Tac Toe",
    image: "/tictactoe.jpg",
    tags: ["AI", "Minimax", "C++"],
    description:
      "Okay, so this isn't your grandma's Tic-Tac-Toe! This was a really cool project from my AI course where I got to dive deep into the Minimax Algorithm. Forget pre-programmed moves or random guesses—this AI is smart. When you play against it, you'll quickly realize it's always looking for the absolute best move, either to secure a win for itself or, failing that, to force a draw. It's a genuine challenge, and honestly, it was fascinating to build an opponent that truly thinks ahead.",
    url: "",
  },
  {
    title: "Office Room",
    image: "/office-room.png",
    tags: ["Java", "Android", "Firebase"],
    description:
      "I built this Android app, 'Office Room', to solve a common problem: making sure the right people get the right messages. It’s a simple notice system where an admin can create different roles and then decide exactly which roles can send notices to other roles. It cuts down on the noise and makes sure important info doesn't get missed. It was a fun challenge to work on and a great way to get more familiar with Android development.",
    url: "",
  },
  {
    title: "SUST Football Tournament Management System",
    image: "/ftms.png",
    tags: ["React.js", "Node.js", "MySQL"],
    description:
      "During my time at SUST, We noticed how much effort went into organizing football tournaments. So, We decided to tackle that challenge head-on by building the 'SUST Football Tournament Management System'. This project is a comprehensive solution designed to streamline the entire tournament process. From assigning teams and scheduling matches to fixing venues and managing all the logistics in between, it covers everything. It was incredibly satisfying to create a system that could simplify such a complex organizational task for my university.",
    url: "",
  },
  {
    title: "Project Pulse",
    image: "/projectPulse.png",
    tags: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
    description:
      "Project Pulse is an app I built to make task management easier for teachers and students. Think of it as a smart to-do list where teachers can assign tasks, and students can update their progress. Plus, there's a chat feature built right in, so everyone can communicate easily about their assignments. It was a cool project to work on, focusing on clear communication and keeping everyone on the same page.",
    url: "",
  },
  {
    title: "Portfolio",
    image: "/adventure.png",
    tags: ["Next.js", "Tailwind CSS"],
    description:
      "You're looking at it! This very portfolio is a project I built to showcase my skills and the work I'm passionate about. I chose Next.js for its powerful capabilities in building modern web applications, and I styled everything with Tailwind CSS for a clean, responsive, and efficient design. It's a living, breathing representation of my journey in software development, constantly evolving as I learn and create more.",
    url: "",
  },
];
