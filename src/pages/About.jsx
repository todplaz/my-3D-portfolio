import { skills, experiences } from "../constants";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Salut, moi c'est <span className="blue-gradient_text font-semibold drop-shadow"> Alex Stéphane Balomog</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Développeur Front End Javascript et React js basé en France, et anciennement technicien en télécommunications, j'ai construit mon expérience à travers l'apprentissage pratique continu et la mise en oeuvres des notions théoriques apprises.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> Mes Compétences </h3>

        <div className="mt-16 flex flex-wrap gap-12" key={skills.name}>
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <div className="py-16">
        <h3 className="subhead-text">Experiences</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          J'ai travaillé avec diverses entreprises, améliorant mes compétences techniques et humaines et faisant équipe avec des personnes intéressantes. Voici le récapitulatif :
        </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img 
                      src={experience.icon} 
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain" 
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;