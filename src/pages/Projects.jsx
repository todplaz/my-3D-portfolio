import { Link } from "react-router-dom";
import { projects } from "../constants";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Mes <span className="blue-gradient_text font-semibold drop-shadow"> Projets </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Je me suis impliqué dans ces projets numériques au fil du temps et de l'expérience que j'ai pu accumuler depuis ma formation jusqu'à mon premier stage.
          Tous ces projets sont open source, donc si cela attise votre curiosité, vous êtes libre d'explorer mon code et de contribuer avec vos idées pour l'améliorer davantage.
          Votre coopération sera très appréciée !
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                 to={project.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="font-semibold text-blue-600"
                >
                  Lien direct
                </Link>
                <img 
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200"/>

      <CTA />
    </section>
  );
};

export default Projects;