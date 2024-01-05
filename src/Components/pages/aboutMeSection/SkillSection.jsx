import React from "react";
import AnimatedText from "../../Text/AnimatedText";
import { slideUpText } from "../../framer-variant";
import { motion } from "framer-motion";

const SkillSection = ({ activate }) => {
  return (
    <div className="grid grid-flow-row gap-12">
      <div className="grid grid-flow-col gap-4">
        <div>
          <h1 className="text-xl font-bold">Skills</h1>
          <hr></hr>
          <p>
            {[
              "react",
              "Javascript",
              "HTML/CSS",
              "Framer motion",
              "git",
              "Figma",
              "Python",
            ].map((item, index) => {
              return (
                <div className="flex overflow-hidden " key={(item, "div")}>
                  <AnimatedText
                    text={item}
                    key={item}
                    delay={index * 0.1}
                    variants={slideUpText}
                    condition={activate}
                    transition={{ ease: "easeInOut" }}
                  />
                </div>
              );
            })}
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold">Soft Skills</h1>
          <hr></hr>
          <p>
            {["Quick learner", "Problem solving", "animation", ""].map(
              (item, index) => {
                return (
                  <div className="flex overflow-hidden " key={(item, "div")}>
                    <AnimatedText
                      text={item}
                      key={item}
                      delay={index * 0.1 + 0.5}
                      variants={slideUpText}
                      condition={activate}
                      transition={{ ease: "easeInOut" }}
                    />
                  </div>
                );
              },
            )}
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">Others</h1>
        <hr></hr>
        <p>
          {["Excel", "LaTex"].map((item, index) => {
            return (
              <div className="flex overflow-hidden " key={(item, "div")}>
                <AnimatedText
                  text={item}
                  key={item}
                  delay={index * 0.1 + 1}
                  variants={slideUpText}
                  condition={activate}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default SkillSection;
