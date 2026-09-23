"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`motion-reveal w-full ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -32px 0px" }}
      transition={{ duration: 0.8, delay: delay / 1000, ease }}
    >
      {children}
    </motion.div>
  );
}
