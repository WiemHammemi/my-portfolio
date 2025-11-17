
"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Footer() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_d5uhwqv", 
        "template_tli84z8", 
        formRef.current,
        "47B1ZfwySxGwWDJ3s" 
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2 className="section-title">{t("contactTitle")}</h2>
        <div className="footer-content">
          {/* --- Infos de contact --- */}
          <div className="contact-section">
            <h3>
              <i className="fas fa-info-circle"></i>
              <span>{t("contactInfo")}</span>
            </h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>wiiem.hammami@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+216 55 714 391</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{t("location")}</span>
              </div>
            </div>

            {/* --- Liens sociaux --- */}
            <div className="social-links">
              <a href="https://www.linkedin.com/in/wiem-hammami-16aa26254/" className="social-link" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/WiemHammemi" className="social-link" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:wiiem.hammami@gmail.com" className="social-link" target="_blank">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://www.facebook.com/wiem.hammemi.2025" className="social-link" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* --- Formulaire de contact --- */}
          <div className="contact-form-section">
            <h3>
              <i className="fas fa-paper-plane"></i>
              <span>{t("sendMessage")}</span>
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="contact-form" id="contactForm">
              <div className="form-group">
                <input type="text" name="from_name" required />
                <label>{t("yourName")}</label>
                <i className="fas fa-user form-icon"></i>
              </div>

              <div className="form-group">
                <input type="email" name="reply_to" required />
                <label>{t("yourEmail")}</label>
                <i className="fas fa-envelope form-icon"></i>
              </div>

              <div className="form-group">
                <input type="text" name="subject" required />
                <label>{t("subject")}</label>
                <i className="fas fa-tag form-icon"></i>
              </div>

              <div className="form-group">
                <textarea name="message" required></textarea>
                <label>{t("yourMessage")}</label>
                <i className="fas fa-comment form-icon"></i>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                <i className="fas fa-paper-plane"></i>
                <span>
                  {loading ? t("sending") : t("sendBtn")}
                </span>
              </button>

              {status === "success" && <p className="success-message">{t("messageSent")}</p>}
{status === "error" && <p className="error-message">{t("messageError")}</p>}

            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Wiem Hammami. {t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
}
