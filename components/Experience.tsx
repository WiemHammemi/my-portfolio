
"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({});

  const toggleDetails = (index: number) => {
    setOpenStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const experiences = [
    {
      dateKey: "exp1Date",
      titleKey: "exp1Title",
      subtitleKey: "exp1Subtitle",
      descKey: "exp1Desc",
      icon: "fas fa-shopping-cart",
      miniProjects: [
        {
          number: 1,
          titleKey: "exp1Mini1Title",
          descKey: "exp1Mini1Desc",
        },
        {
          number: 2,
          titleKey: "exp1Mini2Title",
          descKey: "exp1Mini2Desc",
        },
      ],
      tools: [
        "Next.js",
        "React.js",
        "Redux",
        "PHP",
        "TypeScript",
        "MySQL",
        "Docker",
        "Bitbucket",
        "Postman",
        "Swagger",
      ],
    },
    {
      dateKey: "exp2Date",
      titleKey: "exp2Title",
      subtitleKey: "exp2Subtitle",
      descKey: "exp2Desc",
      icon: "fas fa-graduation-cap",
      features: ["exp2Feature1", "exp2Feature2", "exp2Feature3", "exp2Feature4"],
      tools: ["Flutter", "Firebase", "UML", "GitHub"],
    },
    {
      dateKey: "exp3Date",
      titleKey: "exp3Title",
      subtitleKey: "exp3Subtitle",
      descKey: "exp3Desc",
      icon: "fas fa-user-tie",
      features: ["exp3Feature1", "exp3Feature2", "exp3Feature3", "exp3Feature4"],
      tools: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-briefcase section-icon"></i>
          <span>{t("experience")}</span>
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => {
            const isOpen = openStates[index] || false;
            return (
              <div key={index} className="timeline-item exp-card">
                <div className="exp-header">
                  <div className="exp-title-section">
                    <div className="timeline-date">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{t(exp.dateKey)}</span>
                    </div>
                    <h3 className="timeline-title">
                      <i className="fas fa-building"></i>
                      {t(exp.titleKey)}
                    </h3>
                    <div className="timeline-company">
                      <i className={exp.icon}></i>
                      <span>{t(exp.subtitleKey)}</span>
                    </div>
                  </div>
                  <button
                    className={`toggle-details-btn ${isOpen ? "active" : ""}`}
                    onClick={() => toggleDetails(index)}
                  >
                    <span>{isOpen ? t("hideDetails") : t("seeDetails")}</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div
                  className={`exp-description exp-details ${!isOpen ? "hiding" : ""}`}
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <div className="exp-main-desc">
                    <i className="fas fa-info-circle"></i>
                    <p>{t(exp.descKey)}</p>
                  </div>
                  {exp.miniProjects && (
                    <div className="exp-sub-projects">
                      <h4>
                        <i className="fas fa-tasks"></i>
                        {t("miniProjects")}
                      </h4>
                      {exp.miniProjects.map((project) => (
                        <div key={project.number} className="mini-project">
                          <div className="mini-project-number">{project.number}</div>
                          <div className="mini-project-content">
                            <strong>{t(project.titleKey)}</strong>
                            <p>{t(project.descKey)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {exp.features && (
                    <div className="exp-features">
                      <h4>
                        <i className="fas fa-star"></i>
                        {index === 1 ? t("keyFeatures") : t("achievements")}
                      </h4>
                      <ul className="features-list">
                        {exp.features.map((featureKey, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle"></i>
                            <span>{t(featureKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="exp-tools">
                  <i className="fas fa-tools"></i>
                  <strong>{t("toolsUsed")}</strong>
                  <div className="project-tech">
                    {exp.tools.map((tool, i) => (
                      <span key={i} className="tech-tag">
                        {tool.includes("Next.js") && <i className="fab fa-react"></i>}
                        {tool.includes("React.js") && <i className="fab fa-react"></i>}
                        {tool.includes("Redux") && <i className="fab fa-react"></i>}
                        {tool.includes("PHP") && <i className="fab fa-php"></i>}
                        {tool.includes("MySQL") && <i className="fas fa-database"></i>}
                        {tool.includes("Docker") && <i className="fab fa-docker"></i>}
                        {tool.includes("Bitbucket") && <i className="fab fa-bitbucket"></i>}
                        {tool.includes("Firebase") && <i className="fas fa-fire"></i>}
                        {tool.includes("GitHub") && <i className="fab fa-github"></i>}
                        {tool.includes("HTML") && <i className="fab fa-html5"></i>}
                        {tool.includes("CSS") && <i className="fab fa-css3-alt"></i>}
                        {tool.includes("JavaScript") && <i className="fab fa-js"></i>}
                        {" " + tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

