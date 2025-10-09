import {
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiMysql,
  SiGithub,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

export const profile = {
  name: "Hampus Svensson",
  role: "Frontend Web Developer",
  avatarUrl: "./LinkedInpfp.jpg",
  about:
    "I am a passionate frontend developer with a knack for creating engaging user experiences. I love working with modern web technologies and continuously improving my skills.",
  skills: [
    {name: "CSS", icon: SiCss3 },
    {name: "HTML", icon: SiHtml5 },
    {name: "JavaScript", icon: SiJavascript },
    {name: "TypeScript", icon: SiTypescript },
    {name: "React", icon: SiReact },
    {name: "Agile Project Management", icon: FaProjectDiagram },
    {name: "mySQL", icon: SiMysql },
    {name: "GitHub", icon: SiGithub },
    {name: "Vite", icon: SiVite },
    {name: "Tailwind", icon: SiTailwindcss },
  ],
  projects: [
    { title: "User Cards", description: "Creating user cards using API", url: "https://github.com/Hampeeeeeee/JS3-UserCards-Uppgift", img: "./UserCard-SS.png" },
    { title: "Quiz App", description: "Quiz App in React", url: "https://github.com/Hampeeeeeee/JS3-React-QuizApp", img: "./QuizApp-SS.png" },
  ],
  contact: {
    email: "hampus_svensson99@hotmail.com",
    location: "Trelleborg/Malmö, Sweden",
    linkedin: "https://www.linkedin.com/in/hampus-svensson-3a3505329/",
    github: "https://github.com/Hampeeeeeee",
  },
};