

"use client";
import { useState } from "react";
import { FaGithub, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";
import ExpandableText from "@/components/ExpandableText";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  titleKey: string;
  dateKey: string;
  descKey: string;
  image: string;
  link: string;
  tech: string[];
  typeKey: string;
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
      link: "https://github.com/WiemHammemi/Dashboard-Mobile-Application-Flutter",
      tech: ["Flutter", "Arduino", "IoT", "Bluetooth"],
      typeKey: "projectAcademic",
    },
    {
      titleKey: "proj2Title",
      dateKey: "proj2Date",
      descKey: "proj2Desc",
      image: "/images/projNawarny.png",
      link: "https://github.com/WiemHammemi/Nawarny-E-learning-application",
      tech: ["Flutter", "Django", "MongoDB", "Postman", "GitHub"],
      typeKey: "projectAcademic",
    },
    {
      titleKey: "proj3Title",
      dateKey: "proj3Date",
      descKey: "proj3Desc",
      image: "/images/projWie.png",
      link: "https://github.com/WiemHammemi/wieHope",
      tech: ["Angular", "TypeScript", "Node.js", "MongoDB"],
      typeKey: "projectAcademic",
    },
    {
      titleKey: "proj4Title",
      dateKey: "proj4Date",
      descKey: "proj4Desc",
      image: "/images/projBeTrendy.png",
      link: "https://github.com/WiemHammemi/BeTrendy-mobile-app",
      tech: ["Ionic", "Django", "MongoDB"],
      typeKey: "projectAcademic",
    },
    {
      titleKey: "proj5Title",
      dateKey: "proj5Date",
      descKey: "proj5Desc",
      image: "/images/projLibrairie.png",
      link: "https://github.com/WiemHammemi/eBiblio",
      tech: ["Java", "JavaFX", "MySQL", "UML"],
      typeKey: "projectAcademic",
    },
    {
      titleKey: "proj6Title",
      dateKey: "proj6Date",
      descKey: "proj6Desc",
      image: "/images/projAvocat.png",
      link: "https://github.com/WiemHammemi/Law-Firm-Management-application",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      typeKey: "projectAcademic",
    },
    {
      titleKey: "proj12Title", dateKey: "proj12Date", descKey: "proj12Desc", image: "/images/alimexia.png", link: "https://alimexia.com/",
      tech: ["Next.js", "MongoDB", "Node.js", "OVH", "Stripe"], typeKey: "projectFreelance",
    },
    {
      titleKey: "proj7Title", dateKey: "proj7Date", descKey: "proj7Desc", image: "/images/yoursoap.png", link: "https://yoursoap.tn/",
      tech: ["Next.js", "MongoDB", "Postman", "API REST"], typeKey: "projectCompany",
    },
    {
      titleKey: "proj8Title", dateKey: "proj8Date", descKey: "proj8Desc", image: "/images/kaisse.png", link: "https://kaisse.tn/",
      tech: ["Next.js", "MongoDB", "Postman"], typeKey: "projectCompany",
    },
    {
      titleKey: "proj9Title", dateKey: "proj9Date", descKey: "proj9Desc", image: "/images/humanlink.png", link: "https://humanlink.tn/",
      tech: ["Next.js"], typeKey: "projectCompany",
    },
    {
      titleKey: "proj10Title", dateKey: "proj10Date", descKey: "proj10Desc", image: "/images/amaway.png", link: "",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Postman", "API REST", "Python"], typeKey: "projectCompany",
    },
    {
      titleKey: "proj11Title", dateKey: "proj11Date", descKey: "proj11Desc", image: "/images/bien.png", link: "",
      tech: ["Node.js", "MongoDB", "Postman", "API REST"], typeKey: "projectCompany",
    },
    
  ];

  const orderedProjects = [...projects].sort(
    (a, b) => Number(a.typeKey === "projectAcademic") - Number(b.typeKey === "projectAcademic")
  );
  const displayedProjects = showAll ? orderedProjects : orderedProjects.slice(0, 3);

  return (
    <section id="projets" className="section">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-laptop-code section-icon"></i>
          <span>{t("projects")}</span>
        </h2>
        <div className="projects-grid">
          {displayedProjects.map((proj, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                {proj.image && <Image src={proj.image} alt={t(proj.titleKey)} fill style={{ objectFit: "cover" }} sizes="(max-width: 120px) 100vw, 50vw" />}
                {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={t(proj.titleKey)}>
                  <div className="github-icon">
                    {proj.link.includes("github.com") ? <FaGithub /> : <FaExternalLinkAlt />}
                  </div>
                </a>}
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{t(proj.titleKey)}</h3>
                  <span className={`project-badge ${proj.typeKey}`}>{t(proj.typeKey)}</span>
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
