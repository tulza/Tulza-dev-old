import React from "react";
import { motion } from "framer-motion";

const MeSection = ({ activate }) => {
  return (
    <div className="h-max rounded-[0_75px_0_75px] p-4 py-12 text-center outline">
      <p className="whitespace-nowrap text-3xl">
        Hello, I&apos;m Tulza!{" "}
        <motion.div
          animate={activate && { rotate: [0, 30, 0] }}
          transition={{ repeat: 3, ease: "easeInOut" }}
          key={activate}
        >
          👋
        </motion.div>
      </p>
      I'm a second-year university student on a self-taught journey in web
      development. My passion lies in the world of UI/UX design, and animation
      to create a better user experience on the web.
    </div>
  );
};

export default MeSection;
