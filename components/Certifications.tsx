

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface Certification {
  id: string;
  image: string;
  date: string;
  title: string;
  icon: string;
  source: string;
  skills: string[];
  pdfUrl: string;
}

interface Notification {
  id: number;
  message: string;
  type: "success" | "error";
}

const certifications: Certification[] = [
  {
    id: "CCNA1",
    image: "/images/ccna1.png",
    date: "Juin 2024",
    title: "CCNA 1: Introduction aux réseaux",
    icon: "fas fa-network-wired",
    source: "Cisco Networking Academy",
    skills: ["Modèle OSI", "TCP/IP", "Adressage IP", "Ethernet"],
    pdfUrl: "/file/CCNA1.pdf",
  },
  {
    id: "CCNA2",
    image: "/images/ccna2.png",
    date: "Sept 2024",
    title: "CCNA 2: Commutation et routage",
    icon: "fas fa-route",
    source: "Cisco Networking Academy",
    skills: ["VLAN", "STP", "Routage statique", "RIP"],
    pdfUrl: "/file/CCNA2.pdf",
  },
  {
    id: "CCNA3",
    image: "/images/CCNA3.png",
    date: "Déc 2024",
    title: "CCNA 3: Réseaux d'entreprise",
    icon: "fas fa-server",
    source: "Cisco Networking Academy",
    skills: ["OSPF", "EIGRP", "ACL", "NAT/PAT"],
    pdfUrl: "/file/CCNA3.pdf",
  },
  {
    id: "AWS_Cloud",
    image: "/images/aws_cloud.png",
    date: "Mars 2024",
    title: "Introduction au Cloud",
    icon: "fas fa-cloud",
    source: "AWS Academy",
    skills: ["EC2", "S3", "VPC", "IAM", "CloudWatch"],
    pdfUrl: "/file/AWS_Cloud.pdf",
  },
  {
    id: "AWS_ML",
    image: "/images/aws_ml.png",
    date: "Avril 2024",
    title: "Fondements de ML",
    icon: "fas fa-brain",
    source: "AWS Academy",
    skills: ["SageMaker", "Deep Learning", "NLP", "Computer Vision"],
    pdfUrl: "/file/AWS_ML.pdf",
  },
  {
    id: "Angular",
    image: "/images/Angular.png",
    date: "Jan 2024",
    title: "Formation Angular - 24h",
    icon: "fab fa-angular",
    source: "CrocoCoder Academy",
    skills: ["Components", "Services", "Routing", "RxJS", "TypeScript"],
    pdfUrl: "/file/Angular.pdf",
  },
];

export default function Certifications() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const totalSlides = certifications.length;
 
  const [cardsPerView, setCardsPerView] = useState(3);
    
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const notificationIdRef = useRef(0);



  const maxSlideIndex = Math.max(0, totalSlides - cardsPerView + 2);


  const cardWidthPercent = 100 / cardsPerView;

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
        showNotification(`Ouverture du certificat ${cert.title}...`, "success");
      } else {
        showNotification(`Le certificat ${cert.id} n'est pas encore disponible.`, "error");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du fichier:", error);
      window.open(cert.pdfUrl, "_blank");
      showNotification(`Tentative d'ouverture du certificat ${cert.title}...`, "success");
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
              {certifications.map((cert) => (
                <div className="card cert-card" key={cert.id}>
                  <div className="cert-image">
                    <Image src={cert.image} alt={cert.title} width={300} height={200} />
                    <div className="cert-date">
                      <i className="fas fa-calendar-alt" />
                      <span>{cert.date}</span>
                    </div>
                    <button
                      className="cert-download"
                      onClick={() => downloadCertificate(cert)}
                      title="Télécharger le certificat"
                    >
                      <i className="fas fa-download" style={{ fontSize: "15px" }} />
                    </button>
                  </div>
                  <div className="cert-content">
                    <h3 className="cert-title">
                      <i className={cert.icon}></i>
                      <span>{cert.title}</span>
                    </h3>
                    <div className="cert-source">
                      <FaBuilding />
                      <span>{cert.source}</span>
                    </div>
                    <div className="cert-skills">
                      <div className="cert-skills-label">
                        <i className="fas fa-star" />
                        <span>{t("skillsAcquired")}</span>
                      </div>
                      <div className="cert-skills-list">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="cert-skill-tag">
                            {skill}
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
