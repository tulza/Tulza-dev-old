import ProjectBox from "../ProjectBox";
import {
  urlShortening,
  adviceGenComp,
  ageClacComp,
  solitaireGame,
} from "../svg/projectImage";
import Section from "../Section";

const Copypasto = () => {
  return (
    <Section classname="grid items-center justify-center" id="section2">
      <div className=" flex flex-col gap-10">
        <div className="flex flex-row gap-10 3xl:translate-x-20">
          <ProjectBox
            title="Web-portfolio"
            tags={[
              "React",
              "Javascript",
              "Tailwind",
              "Framer motion",
              "html/css",
            ]}
          />
          <ProjectBox
            title="URL-shortening-API-page"
            image={urlShortening}
            tags={[
              "React",
              "Javascript",
              "Tailwind",
              "Responsive",
              "Post api",
              "html/css",
            ]}
          />
          <ProjectBox
            title="Age-calculator-app"
            image={ageClacComp}
            tags={["html/css", "Javascript", "Responsive"]}
          />
        </div>
        <div className="flex flex-row gap-10 3xl:-translate-x-20">
          <ProjectBox
            image={adviceGenComp}
            title="Advice generator app"
            tags={["html/css", "Javascript", "RestAPI"]}
          />
          <ProjectBox
            title="Solitaire lite"
            tags={["Python", "Turtle graphics"]}
            image={solitaireGame}
          />
          <ProjectBox title="Stray-Artist" tags={["Unity", "C#"]} />
        </div>
      </div>
    </Section>
  );
};

export default Copypasto;
