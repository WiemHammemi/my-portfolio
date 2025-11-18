"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    
    // Choisir le fichier selon la langue
    if (language === "fr") {
      link.href = "/file/CV_Hammami_Wiem.pdf";
      link.download = "CV_Hammami_Wiem.pdf";
    } else {
      // Pour anglais et arabe
      link.href = "/file/CV_Wiem_Hammami.pdf";
      link.download = "CV_Wiem_Hammami.pdf";
    }
    
    link.click();
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as "fr" | "en" | "ar");
  };

  return (
    <header className="header bg-white shadow-md py-4">
      <div className="nav-container container mx-auto flex justify-between items-center px-4">
        <div className="logo text-xl font-bold">{mounted ? t("name") : ""}</div>

        <nav>
          <ul className="nav-links flex space-x-4">
            <li><a href="#apropos">{t("about")}</a></li>
            <li><a href="#education">{t("education")}</a></li>
            <li><a href="#experience">{t("experience")}</a></li>
            <li><a href="#competences">{t("skills")}</a></li>
            <li><a href="#projets">{t("projects")}</a></li>
            <li><a href="#contact">{t("contact")}</a></li>
          </ul>
        </nav>

        {/* --- CONTROL BUTTONS --- */}
        <div className="control-buttons flex items-center space-x-2">
          {/* Download CV */}
          <button
            onClick={handleDownload}
            className="btn btn-primary flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            title={language === "fr" ? "Télécharger CV_Hammami_Wiem.pdf" : "Download CV_Wiem_Hammami.pdf"}
          >
            <i className="fas fa-download"></i>
            <span>{t("downloadCV")}</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-control px-3 py-2 rounded-md border hover:bg-gray-100"
          >
            {!mounted ? (
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
            ) : (
              <i className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
            )}
          </button>

          {/* Language selector */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="btn btn-control px-2 py-1 border rounded-md"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </div>
    </header>
  );
}