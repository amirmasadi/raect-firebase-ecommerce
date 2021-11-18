import { motion } from "framer-motion";
import React from "react";

export default function TransitionAnimation({
  color = "bg-secondary",
  delay = "3",
}) {
  return (
    <motion.div
      className="position-absolute bottom-0 left-100  w-100 "
      style={{ height: "100%", zIndex: "3", backgroundColor: color }}
      animate={{
        width: "100%",
        left: "100%",
        transition: {
          duration: delay,
        },
      }}
    ></motion.div>
  );
}
