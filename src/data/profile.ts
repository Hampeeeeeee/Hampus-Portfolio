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
  SiAngular,
  SiGraphql,
  SiArangodb,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  img: string;
  stack?: string[];
}

export const profile = {
  name: "Hampus Svensson",
  role: "Frontend Web Developer",
  avatarUrl: "./LinkedInpfp.jpg",
  about:
    "I am a passionate frontend developer with a knack for creating engaging user experiences. I love working with modern web technologies and continuously improving my skills.",
  skills: [
    {name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: SiCss3 },
    {name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: SiHtml5 },
    {name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: SiJavascript },
    {name: "TypeScript", link: "https://www.typescriptlang.org/", icon: SiTypescript },
    {name: "React", link: "https://reactjs.org/", icon: SiReact },
    {name: "APM", link: "https://www.atlassian.com/agile/project-management", icon: FaProjectDiagram },
    {name: "mySQL", link: "https://www.mysql.com/", icon: SiMysql },
    {name: "GitHub", link: "https://github.com/", icon: SiGithub },
    {name: "Vite", link: "https://vitejs.dev/", icon: SiVite },
    {name: "Tailwind", link: "https://tailwindcss.com/", icon: SiTailwindcss },
    {name: "Angular", link: "https://angular.io/", icon: SiAngular},
    {name: "GraphQL", link: "https://graphql.org/", icon: SiGraphql},
    {name: "ArangoDB", link: "https://www.arangodb.com/", icon: SiArangodb},
  ],
  projects: [
    { id: "travel-app", title: "Travel App with Flag Quiz", description: "Flag quiz app, made in React.", url: "https://flagged-app.vercel.app/flagged", img: "./TravelApp-SS.png", stack: ["React", "TypeScript", "TailwindCSS"] },
    { id: "user-cards", title: "User Cards", description: "Creating user cards using API", url: "https://github.com/Hampeeeeeee/JS3-UserCards-Uppgift", img: "./UserCard-SS.png", stack: ["HTML", "CSS", "JavaScript"] },
    { id: "quiz-app", title: "Quiz App", description: "Quiz App in React", url: "https://github.com/Hampeeeeeee/JS3-React-QuizApp", img: "./QuizApp-SS.png", stack: ["React", "TypeScript", "TailwindCSS"] },
  ] satisfies Project[],
  contact: {
    email: "hampus_svensson99@hotmail.com",
    location: "Trelleborg/Malmö, Sweden",
    linkedin: "https://www.linkedin.com/in/hampus-svensson-3a3505329/",
    github: "https://github.com/Hampeeeeeee",
  },
};