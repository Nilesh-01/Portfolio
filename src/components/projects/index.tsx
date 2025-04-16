import "./index.style.scss";
import ACADUP from "../../assets/acadup.jpeg";
import EXPENSE from "../../assets/expense.jpeg";
import SLOTIFY from "../../assets/slotify.jpeg";
import TruthPulse from "../../assets/TruthPulse.jpg"
import CONNECT from "../../assets/connect.jpeg";
import CODITAS from "../../assets/coditas.jpg";
import ACADUP_LOGO from "../../assets/android-app.png";
import EXPENSE_MANAGER from "../../assets/android-app.png";
import TASK_MANGER from "../../assets/task-manager.png";
import WEATHER_APP from "../../assets/weather-app.png";
import SHORTLY from "../../assets/shortly.png";
import GO_VAHAN from "../../assets/landing-page.png";
import REACT from "../../assets/react.png";
import { useRef, useEffect, useState } from "react";
import useOnScreen from "../../hooks/userOnscreen";
import { link } from "fs";

const projectsData = [
  {
    id: 1,
    name: "AcadUp",
    category: ACADUP_LOGO,
    icon: ACADUP,
    description:
      "It is an android application made via Android studio, Java and Firebase for authentication and Data storage. The purpose is basically to make an e-learning platform where the user can find the recorded videos, notes, quizes and even schedule demo for live classes.",
  },
  {
    id: 2,
    name: "Expense Manager",
    icon: EXPENSE,
    category: EXPENSE_MANAGER,
    description:
      "An Android application used to manage the user’s daily expenses in a more efficient way. Adding budget, categorizing expenses and getting the stastics and figures for a particular period of time is the main key feature of this application.",
  },
  {
    id: 3,
    name: "Truth Pulse",
    icon: TruthPulse,
    category: REACT,
    link: "https://truth-pulse-tau.vercel.app/",
    description:
      "A news app using react that fetches the latest news with different categories with simple and efficient design",
  },
  {
    id: 5,
    name: "Octom",
    icon: TASK_MANGER,
    category: REACT,
    link:"https://octom-dashboard.vercel.app/",
    description:
      "A React-based task management dashboard provides a visually intuitive and responsive platform for overseeing project portfolios. The dashboard's user-friendly design ensures efficient task tracking and decision-making.",
  },
  {
    id: 6,
    name: "Sky Cast",
    icon: WEATHER_APP,
    category: REACT,
    link:"sky-cast-psi.vercel.app",
    description:
      "The React-based weather app provides a seamless and user-friendly experience, displaying real-time weather data with dynamic updates. Its intuitive design allows users to easily search and view weather details for specific locations.",
  },
  {
    id: 7,
    name: "Go vahan",
    icon: GO_VAHAN,
    category: REACT,
    link:"https://go-vahan.vercel.app/",
    description:
      "A React-based transportation website's landing page offers a sleek and responsive interface, utilizing components for dynamic content showcasing services, pricing, and contact details. Real-time updates and smooth transitions enhance user experience. The design prioritizes simplicity, providing visitors with an efficient introduction to the transportation services offered.",
  },
  {
    id:8,
    name:"Shortly",
    icon:SHORTLY,
    link:"https://shortly-sigma-topaz.vercel.app/",
    category:REACT,
    description:"A React-powered URL shortening website delivers a user-friendly experience, allowing seamless input and instant generation of shortened links. The intuitive interface, coupled with React's real-time updates, ensures efficient URL management. The design prioritizes simplicity, making the process quick and straightforward for users."
  }
];

const Projects = ({ setActive }: any) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(projectRef);
  const [isVisited, setIsVisited] = useState<boolean>(isVisible);

  useEffect(() => {
    isVisible && setActive("projects");
  }, [isVisible, setActive]);

  useEffect(() => {
    isVisible && setIsVisited(isVisible);
  }, [isVisible]);

  return (
    <div className="page-section" id="projects" ref={projectRef}>
      <div className={`about-title ${isVisited ? "slide-in" : "slide-in"}`}>
        PROJECTS
      </div>
      <div className="projects">
        {projectsData.map((project, index) => (
          <div
            className={`project-card ${isVisited ? "slide-out" : "slide-out"}`}
            key={index}
          >
            <img src={project.category} className="card-logo" alt="img" />
            <img src={project.icon} alt="" className="card-image" />
            <div className="card-title">{project.name}</div>
            <div className="card-description">{project.description}</div>
            {project?.link && (
              <a href={project.link} target="_blank">
                Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
