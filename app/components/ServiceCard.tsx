'use client';

import { ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBg = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(157, 168, 197, 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-carrillo-blue/20 transition-all duration-500 hover:scale-[1.02]"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: spotlightBg }}
      />

      <div className="relative h-full p-8 z-10 flex flex-col">
        {/* Icon container */}
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <div className="text-carrillo-blue-light group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>

        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-carrillo-blue-light transition-colors duration-300">
          {title}
        </h3>

        <p className="text-carrillo-gray text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>

        <div className="absolute top-8 right-8 w-20 h-20 bg-carrillo-blue-light/5 rounded-full blur-3xl group-hover:bg-carrillo-blue-light/20 transition-all duration-700" />
      </div>
    </motion.div>
  );
}
