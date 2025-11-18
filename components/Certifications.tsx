
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface Certification {
  id: string;
  image: string;
  dateKey: string;
  titleKey: string;
  icon: string;
  sourceKey: string;
  skillsKeys: string[];
  pdfUrl: string;
}

interface Notification {
  id: number;
  message: string;
  type: "success" | "error";
}

// Données des certifications avec clés de traduction
const certificationsData: Certification[] = [
  {
    id: "CCNA1",
    image: "/images/ccna1.png",
    dateKey: "cert1Date",
    titleKey: "cert1Title",
    icon: "fas fa-network-wired",
    sourceKey: "cert1Source",
    skillsKeys: ["cert1Skill1", "cert1Skill2", "cert1Skill3", "cert1Skill4"],
    pdfUrl: "/file/CCNA1.pdf",
  },
  {
    id: "CCNA2",
    image: "/images/ccna2.png",
    dateKey: "cert2Date",
    titleKey: "cert2Title",
    icon: "fas fa-route",
    sourceKey: "cert2Source",
    skillsKeys: ["cert2Skill1", "cert2Skill2", "cert2Skill3", "cert2Skill4"],
    pdfUrl: "/file/CCNA2.pdf",
  },
  {
    id: "CCNA3",
    image: "/images/ccna3.png",
    dateKey: "cert3Date",
    titleKey: "cert3Title",
    icon: "fas fa-server",
    sourceKey: "cert3Source",
    skillsKeys: ["cert3Skill1", "cert3Skill2", "cert3Skill3", "cert3Skill4"],
    pdfUrl: "/file/CCNA3.pdf",
  },
  {
    id: "AWS_Cloud",
    image: "/images/aws_cloud.png",
    dateKey: "cert4Date",
    titleKey: "cert4Title",
    icon: "fas fa-cloud",
    sourceKey: "cert4Source",
    skillsKeys: ["cert4Skill1", "cert4Skill2", "cert4Skill3", "cert4Skill4", "cert4Skill5"],
    pdfUrl: "/file/AWS_Cloud.pdf",
  },
  {
    id: "AWS_ML",
    image: "/images/aws_ml.png",
    dateKey: "cert5Date",
    titleKey: "cert5Title",
    icon: "fas fa-brain",
    sourceKey: "cert5Source",
    skillsKeys: ["cert5Skill1", "cert5Skill2", "cert5Skill3", "cert5Skill4"],
    pdfUrl: "/file/AWS_ML.pdf",
  },
  {
    id: "Angular",
    image: "/images/Angular.png",
    dateKey: "cert6Date",
    titleKey: "cert6Title",
    icon: "fab fa-angular",
    sourceKey: "cert6Source",
    skillsKeys: ["cert6Skill1", "cert6Skill2", "cert6Skill3", "cert6Skill4", "cert6Skill5"],
    pdfUrl: "/file/Angular.pdf",
  },
];

export default function Certifications() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const totalSlides = certificationsData.length;
 
  const [cardsPerView, setCardsPerView] = useState(3);
    
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const notificationIdRef = useRef(0);

  const maxSlideIndex = Math.max(0, totalSlides - cardsPerView + 2);

  const moveSlide = (direction: number) => {
    setCurrentSlide((prev) => {
      let newSlide = prev + direction;
      if (newSlide < 0) newSlide = maxSlideIndex;
      if (newSlide > maxSlideIndex) newSlide = 0;
      return newSlide;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, maxSlideIndex));
  };

  const showNotification = (message: string, type: "success" | "error") => {
    const id = notificationIdRef.current++;
    const newNotification: Notification = { id, message, type };
    setNotifications((prev) => [...prev, newNotification]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  const downloadCertificate = async (cert: Certification) => {
    try {
      const response = await fetch(cert.pdfUrl, { method: "HEAD" });
      if (response.ok) {
        window.open(cert.pdfUrl, "_blank");
        showNotification(t("certOpenSuccess").replace("{title}", t(cert.titleKey)), "success");
      } else {
        showNotification(t("certNotAvailable").replace("{id}", cert.id), "error");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du fichier:", error);
      window.open(cert.pdfUrl, "_blank");
      showNotification(t("certOpenAttempt").replace("{title}", t(cert.titleKey)), "success");
    }
  };

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView(); 
    window.addEventListener('resize', updateCardsPerView); 

    const startAutoPlay = () => {
      stopAutoPlay();
      intervalRef.current = setInterval(() => moveSlide(1), 5000);
    };

    const stopAutoPlay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    startAutoPlay();
    const wrapper = trackRef.current?.parentElement;
    if (wrapper) {
      wrapper.addEventListener("mouseenter", stopAutoPlay);
      wrapper.addEventListener("mouseleave", startAutoPlay);
    }

    return () => {
      stopAutoPlay();
      window.removeEventListener('resize', updateCardsPerView); 
      wrapper?.removeEventListener("mouseenter", stopAutoPlay);
      wrapper?.removeEventListener("mouseleave", startAutoPlay);
    };
  }, []);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-certificate section-icon" />
          <span>{t("certifications")}</span>
        </h2>
        <div className="cert-carousel-wrapper">
          <button className="carousel-btn prev-btn" onClick={() => moveSlide(-1)}>
            <FaChevronLeft />
          </button>
          <div className="cert-carousel-container">
            <div
              className="cert-carousel-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)`,
              }}
            >
              {certificationsData.map((cert) => (
                <div className="card cert-card" key={cert.id}>
                  <div className="cert-image">
                    <Image src={cert.image} alt={t(cert.titleKey)} width={300} height={200} />
                    <div className="cert-date">
                      <i className="fas fa-calendar-alt" />
                      <span>{t(cert.dateKey)}</span>
                    </div>
                    <button
                      className="cert-download"
                      onClick={() => downloadCertificate(cert)}
                      title={t("downloadCertificate")}
                    >
                      <i className="fas fa-download" style={{ fontSize: "15px" }} />
                    </button>
                  </div>
                  <div className="cert-content">
                    <h3 className="cert-title">
                      <i className={cert.icon}></i>
                      <span>{t(cert.titleKey)}</span>
                    </h3>
                    <div className="cert-source">
                      <FaBuilding />
                      <span>{t(cert.sourceKey)}</span>
                    </div>
                    <div className="cert-skills">
                      <div className="cert-skills-label">
                        <i className="fas fa-star" />
                        <span>{t("skillsAcquired")}</span>
                      </div>
                      <div className="cert-skills-list">
                        {cert.skillsKeys.map((skillKey, i) => (
                          <span key={i} className="cert-skill-tag">
                            {t(skillKey)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn next-btn" onClick={() => moveSlide(1)}>
            <FaChevronRight />
          </button>
        </div>
      
        <div className="carousel-indicators">
          {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="notification-container">
        {notifications.map((notif) => (
          <div key={notif.id} className={`notification notification-${notif.type}`}>
            <span>{notif.message}</span>
          </div>
        ))}
      </div>
    </section>
  );
}