
"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="section">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-user section-icon"></i>
          <span>{t("aboutMe")}</span>
        </h2>
        <div className="about-grid">
          {/* --- LEFT SIDE --- */}
          <div className="about-left">
            {/* Profile */}
            <div className="profile-info">
              <h3>
                <i className="fas fa-info-circle tech-icon" style={{ color: "var(--accent-color)" }}></i>
                <span>{t("profile")}</span>
              </h3>
              <p>{t("profileDesc")}</p>
            </div>

            {/* Education */}
            <div className="about-education" id="education">
              <h3>
                <i className="fas fa-graduation-cap tech-icon" style={{ color: "var(--primary-color)" }}></i>
                <span>{t("training")}</span>
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">{t("edu1Date")}</div>
                  <h4 className="timeline-title">{t("edu1Title")}</h4>
                  <div className="timeline-company">{t("edu1School")}</div>
                  <p>{t("edu1Spec")}</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">{t("edu2Date")}</div>
                  <h4 className="timeline-title">{t("edu2Title")}</h4>
                  <div className="timeline-company">{t("edu2School")}</div>
                  <p>{t("edu2Spec")}</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">{t("edu3Date")}</div>
                  <h4 className="timeline-title">{t("edu3Title")}</h4>
                  <div className="timeline-company">{t("edu3School")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE --- */}
          <div className="about-right">
            {/* Languages */}
            <div className="simple-languages">
              <h3>
                <i className="fas fa-language tech-icon" style={{ color: "var(--primary-color)" }}></i>
                <span>{t("languages")}</span>
              </h3>
              {[
                { flag: "🇹🇳", name: t("arabicLang"), level: t("nativeLevel"), width: "100%" },
                { flag: "🇫🇷", name: t("frenchLang"), level: t("intermediateLevel"), width: "75%" },
                { flag: "🇬🇧", name: t("englishLang"), level: t("intermediateLevel"), width: "70%" },
              ].map((lang) => (
                <div key={lang.name} className="language-simple">
                  <div className="language-header">
                    <span className="flag">{lang.flag}</span>
                    <span className="name">{lang.name}</span>
                    <span className="level">{lang.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: lang.width }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Activities */}
            <div className="activities-list">
              <h3>
                <i className="fas fa-users tech-icon" style={{ color: "var(--accent-color)" }}></i>
                <span>{t("associativeLife")}</span>
              </h3>
              <div className="activity-item">
                <i className="fas fa-microchip activity-icon"></i>
                <div>
                  <strong>{t("assoc1Title")}</strong>
                  <p>{t("assoc1Desc")}</p>
                </div>
              </div>
              <div className="activity-item">
                <i className="fas fa-trophy activity-icon"></i>
                <div>
                  <strong>{t("assoc2Title")}</strong>
                  <p>{t("assoc2Desc")}</p>
                </div>
              </div>
              <div className="activity-item">
                <i className="fas fa-code activity-icon"></i>
                <div>
                  <strong>{t("assoc3Title")}</strong>
                  <p>{t("assoc3Desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}