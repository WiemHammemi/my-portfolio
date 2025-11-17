'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Créer les particules
    if (particlesRef.current) {
      const particleCount = 40;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = Math.random() * 6 + 6 + 's';
        particlesRef.current.appendChild(particle);
      }
    }

    // Effet parallax sur les formes géométriques
    const handleMouseMove = (e: MouseEvent) => {
      if (!shapesRef.current) return;
      
      const shapes = shapesRef.current.querySelectorAll('.geometric-shape');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        
        (shape as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/* Background animé avec gradient */}
      <div className="animated-bg"></div>

      {/* Container pour les particules */}
      <div ref={particlesRef} id="particlesContainer" style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none',
        zIndex: -1 
      }}></div>

      {/* Couche géométrique avec formes */}
      <div className="geometric-layer" ref={shapesRef}>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
      </div>

      {/* Vagues lumineuses */}
      <div className="light-wave"></div>
      <div className="light-wave"></div>
      <div className="light-wave"></div>
    </>
  );
};

export default AnimatedBackground;