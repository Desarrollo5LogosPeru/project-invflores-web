"use client";

import { motion } from "framer-motion";
import { IconWindow, IconBuildingSkyscraper, IconHammer, IconRuler } from "@tabler/icons-react";

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* ── Fondo blanco ── */}
      <div className="absolute inset-0 bg-white" />

      {/* ── Glow top-left ── */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-200px",
          left: "-200px",
          background: "radial-gradient(circle, rgba(0,0,172,0.10) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Glow bottom-right ── */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "-150px",
          right: "-150px",
          background: "radial-gradient(circle, rgba(90,199,255,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ══ ROMBOS ══ */}

      {/* Rombo 1 — grande, top-right */}
      <motion.div
        className="absolute"
        style={{
          width: 220,
          height: 220,
          top: "8%",
          right: "10%",
          transform: "rotate(45deg)",
          background: "linear-gradient(135deg, #ADE7FE 0%, #5AC7FF 50%, #0000AC 100%)",
          opacity: 0.18,
          borderRadius: "8px",
        }}
        animate={{ rotate: [45, 52, 45], opacity: [0.18, 0.25, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rombo 2 — mediano, left-center */}
      <motion.div
        className="absolute"
        style={{
          width: 140,
          height: 140,
          top: "38%",
          left: "4%",
          transform: "rotate(45deg)",
          background: "linear-gradient(135deg, #0000AC 0%, #5AC7FF 100%)",
          opacity: 0.14,
          borderRadius: "6px",
        }}
        animate={{ rotate: [45, 38, 45], opacity: [0.14, 0.22, 0.14] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Rombo 3 — pequeño, bottom-left */}
      <motion.div
        className="absolute"
        style={{
          width: 90,
          height: 90,
          bottom: "18%",
          left: "18%",
          transform: "rotate(45deg)",
          background: "linear-gradient(135deg, #5AC7FF 0%, #ADE7FE 100%)",
          opacity: 0.2,
          borderRadius: "4px",
        }}
        animate={{ rotate: [45, 55, 45], opacity: [0.2, 0.28, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Rombo 4 — grande outline, bottom-right */}
      <motion.div
        className="absolute"
        style={{
          width: 180,
          height: 180,
          bottom: "10%",
          right: "6%",
          transform: "rotate(45deg)",
          background: "transparent",
          border: "2px solid rgba(0,0,172,0.18)",
          borderRadius: "6px",
        }}
        animate={{ rotate: [45, 52, 45], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Rombo 5 — outline celeste, top-left */}
      <motion.div
        className="absolute"
        style={{
          width: 110,
          height: 110,
          top: "20%",
          left: "12%",
          transform: "rotate(45deg)",
          background: "transparent",
          border: "2px solid rgba(90,199,255,0.25)",
          borderRadius: "4px",
        }}
        animate={{ rotate: [45, 38, 45], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Rombo 6 — pequeño sólido, center-right */}
      <motion.div
        className="absolute"
        style={{
          width: 70,
          height: 70,
          top: "55%",
          right: "18%",
          transform: "rotate(45deg)",
          background: "linear-gradient(135deg, #0000AC 0%, #ADE7FE 100%)",
          opacity: 0.16,
          borderRadius: "3px",
        }}
        animate={{ rotate: [45, 52, 45], opacity: [0.16, 0.24, 0.16] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ══ FRANJAS DIAGONALES ══ */}

      {/* Franja 1 */}
      <div
        className="absolute w-[200%] -left-[50%]"
        style={{
          top: "30%",
          height: "2px",
          transform: "rotate(-5deg)",
          background:
            "linear-gradient(90deg, transparent 0%, #5AC7FF 30%, #ADE7FE 50%, #5AC7FF 70%, transparent 100%)",
          opacity: 0.4,
        }}
      />
      <div
        className="absolute w-[200%] -left-[50%]"
        style={{
          top: "calc(30% + 8px)",
          height: "1px",
          transform: "rotate(-5deg)",
          background:
            "linear-gradient(90deg, transparent 0%, #ADE7FE 35%, white 50%, #ADE7FE 65%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      {/* Franja 2 */}
      <div
        className="absolute w-[200%] -left-[50%]"
        style={{
          top: "62%",
          height: "2px",
          transform: "rotate(-5deg)",
          background:
            "linear-gradient(90deg, transparent 0%, #0000AC 25%, #5AC7FF 50%, #0000AC 75%, transparent 100%)",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute w-[200%] -left-[50%]"
        style={{
          top: "calc(62% + 8px)",
          height: "1px",
          transform: "rotate(-5deg)",
          background:
            "linear-gradient(90deg, transparent 0%, #5AC7FF 35%, #ADE7FE 50%, #5AC7FF 65%, transparent 100%)",
          opacity: 0.35,
        }}
      />

      {/* ══ 4 ICONOS SUTILES ══ */}
      {[
        { Icon: IconWindow, x: "88%", y: "30%", delay: 0 },
        { Icon: IconBuildingSkyscraper, x: "3%", y: "72%", delay: 1.2 },
        { Icon: IconHammer, x: "50%", y: "85%", delay: 2 },
        { Icon: IconRuler, x: "72%", y: "5%", delay: 0.6 },
      ].map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, top: y }}
          animate={{
            opacity: [0, 0.3, 0.3, 0],
            y: [0, -12, -12, 0],
          }}
          transition={{
            duration: 7,
            delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          <Icon size={40} color="#0000ac" stroke={1} />
        </motion.div>
      ))}
    </div>
  );
};
