

"use client";
import { useState } from "react";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ExpandableText from "@/components/ExpandableText";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  titleKey: string;
  dateKey: string;
  descKey: string;
  image: string;
  github: string;
  tech: string[];
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      titleKey: "proj1Title",
      dateKey: "proj1Date",
      descKey: "proj1Desc",
      image: "/images/projIOT.png",
      github: "https://github.com/WiemHammemi/Dashboard-Mobile-Application-Flutter",
      tech: ["Flutter", "Arduino", "IoT", "Bluetooth"],
    },
    {
      titleKey: "proj2Title",
      dateKey: "proj2Date",
      descKey: "proj2Desc",
      image: "/images/projNawarny.png",
      github: "https://github.com/WiemHammemi/Nawarny-E-learning-application",
      tech: ["Flutter", "Django", "MongoDB", "Postman", "GitHub"],
    },
    {
      titleKey: "proj3Title",
      dateKey: "proj3Date",
      descKey: "proj3Desc",
      image: "/images/projWie.png",
      github: "https://github.com/WiemHammemi/wieHope",
      tech: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    },
    {
      titleKey: "proj4Title",
      dateKey: "proj4Date",
      descKey: "proj4Desc",
      image: "/images/projBeTrendy.png",
      github: "https://github.com/WiemHammemi/BeTrendy-mobile-app",
      tech: ["Ionic", "Django", "MongoDB"],
    },
    {
      titleKey: "proj5Title",
      dateKey: "proj5Date",
      descKey: "proj5Desc",
      image: "/images/projLibrairie.png",
      github: "https://github.com/WiemHammemi/eBiblio",
      tech: ["Java", "JavaFX", "MySQL", "UML"],
    },
    {
      titleKey: "proj6Title",
      dateKey: "proj6Date",
      descKey: "proj6Desc",
      image: "/images/projAvocat.png",
      github: "https://github.com/WiemHammemi/Law-Firm-Management-application",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projets" className="section">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-laptop-code section-icon"></i>
          <span>{t("academicProjects")}</span>
        </h2>
        <div className="projects-grid">
          {displayedProjects.map((proj, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <Image src={proj.image} alt={t(proj.titleKey)} fill style={{ objectFit: "cover" }}   sizes="(max-width: 120px) 100vw, 50vw"
 />
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <div className="github-icon">
                    <FaGithub />
                  </div>
                </a>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{t(proj.titleKey)}</h3>
                  <div className="project-date">{t(proj.dateKey)}</div>
                </div>
                <div className="project-description">
                  <ExpandableText text={t(proj.descKey)} maxLines={2} />
                </div>
                <div className="project-tech">
                  {proj.tech.map((tech, i) => (
                    <span className="tech-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="show-more-projects">
          <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? t("seeLessProjects") : t("seeMoreProjects")}
            {showAll ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
        </div>
      </div>
    </section>
  );
} 