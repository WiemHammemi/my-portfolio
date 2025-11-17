
"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="accueil" className="section">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>{t("name")}</h1>
            <p className="subtitle">{t("engineerTitle")}</p>
            <p className="description">{t("heroDescription")}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                <span>{t("contactMe")}</span>
              </a>
              <a href="#projets" className="btn btn-control">
                <i className="fas fa-code"></i>
                <span>{t("viewProjects")}</span>
              </a>
            </div>
          </div>
          <div className="profile-image">
            <Image
              src="/images/photoProfil.jpeg"
              alt="Photo de profil"
              width={300}
              height={300}
              className="profile-image"
              loading="eager"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}