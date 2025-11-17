

"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="competences" className="section">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-cogs section-icon"></i>
          <span>{t("skills")}</span>
        </h2>
        <div className="skills-grid">
          {/* Langages de programmation */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-code tech-icon"></i>
              <span>{t("programmingLanguages")}</span>
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <i className="tech-icon tech-c">🅲</i>C
              </span>
              <span className="skill-tag">
                <i className="tech-icon tech-cpp">🅲⁺⁺</i>C++
              </span>
              <span className="skill-tag">
                <i className="fab fa-java tech-icon tech-java"></i>Java
              </span>
              <span className="skill-tag">
                <i className="fab fa-php tech-icon tech-php"></i>PHP
              </span>
              <span className="skill-tag">
                <i className="fab fa-js-square tech-icon tech-js"></i>JavaScript
              </span>
              <span className="skill-tag">
                <i className="fab fa-js-square tech-icon tech-ts"></i>TypeScript
              </span>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-laptop-code tech-icon"></i>
              <span>{t("frontendDev")}</span>
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <i className="fab fa-html5 tech-icon tech-html"></i>HTML
              </span>
              <span className="skill-tag">
                <i className="fab fa-css3-alt tech-icon tech-css"></i>CSS
              </span>
              <span className="skill-tag">
                <i className="fab fa-bootstrap tech-icon tech-bootstrap"></i>Bootstrap
              </span>
              <span className="skill-tag">
                <i className="fab fa-angular tech-icon tech-angular"></i>Angular
              </span>
              <span className="skill-tag">
                <i className="fab fa-react tech-icon tech-react"></i>React.js
              </span>
              <span className="skill-tag">
                <i className="fab fa-react tech-icon tech-next"></i>Next.js
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-server tech-icon"></i>
              <span>{t("backendFrameworks")}</span>
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <i className="fab fa-node-js tech-icon tech-node"></i>Node.js
              </span>
              <span className="skill-tag">
                <i className="fab fa-python tech-icon tech-django"></i>Django
              </span>
              <span className="skill-tag">
                <i className="fab fa-php tech-icon tech-php"></i>PHP
              </span>
            </div>
          </div>

          {/* Mobile */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-mobile-alt tech-icon"></i>
              <span>{t("mobileDev")}</span>
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <i className="fas fa-mobile-alt tech-icon tech-flutter"></i>Flutter
              </span>
              <span className="skill-tag">
                <i className="fas fa-mobile-alt tech-icon tech-ionic"></i>Ionic
              </span>
            </div>
          </div>

          {/* Bases de données */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-database tech-icon"></i>
              <span>{t("databases")}</span>
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <i className="fas fa-database tech-icon tech-mysql"></i>MySQL
              </span>
              <span className="skill-tag">
                <i className="fas fa-leaf tech-icon tech-mongodb"></i>MongoDB
              </span>
              <span className="skill-tag">
                <i className="fas fa-fire tech-icon tech-firebase"></i>Firebase
              </span>
              <span className="skill-tag">
                <i className="fas fa-database tech-icon"></i>SQL
              </span>
              <span className="skill-tag">
                <i className="fas fa-database tech-icon"></i>NoSQL
              </span>
            </div>
          </div>

          {/* Outils */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-tools tech-icon"></i>
              <span>{t("toolsEnv")}</span>
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <i className="fab fa-docker tech-icon tech-docker"></i>Docker
              </span>
              <span className="skill-tag">
                <i className="fab fa-git-alt tech-icon tech-git"></i>Git
              </span>
              <span className="skill-tag">
                <i className="fab fa-github tech-icon tech-github"></i>GitHub
              </span>
              <span className="skill-tag">
                <i className="fab fa-bitbucket tech-icon" style={{ color: "#0052cc" }}></i>Bitbucket
              </span>
              <span className="skill-tag">
                <i className="fas fa-plug tech-icon" style={{ color: "#ff6c37" }}></i>Postman
              </span>
              <span className="skill-tag">
                <i className="fas fa-book tech-icon" style={{ color: "#85ea2d" }}></i>Swagger
              </span>
              <span className="skill-tag">
                <i className="fas fa-cogs tech-icon" style={{ color: "#d33833" }}></i>Jenkins
              </span>
              <span className="skill-tag">
                <i className="fab fa-linux tech-icon tech-linux"></i>Linux
              </span>
              <span className="skill-tag">
                <i className="fab fa-jira tech-icon" style={{ color: "#0052cc" }}></i>Jira
              </span>
              <span className="skill-tag">
                <i className="fab fa-unity tech-icon" style={{ color: "#000000" }}></i>Unity
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}