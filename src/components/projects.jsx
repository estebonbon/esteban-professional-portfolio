import { PROJECTS } from "../constants";
import { motion, useReducedMotion } from "framer-motion";

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pb-4">
      <motion.h2 
        className="mb-20 text-center text-4xl"
        /* Uncomment below for animation */
        /* whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.50 }} */>
        Projects
      </motion.h2>
      
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center lg:items-start lg:gap-8">
            {/* Project Image */}
            <motion.div 
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -100 }}              
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mb-6 lg:mb-0 flex justify-center md:justify-start"
            >
              <img 
                src={project.image} 
                width={250}
                height={250}
                alt={project.titleAria}
                className="rounded" 
              />
            </motion.div> {/* end the image div */}
            
            {/* Project Details */}
            <motion.div 
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 100 }}              
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              {/* Tech Stack and Button */}
              <div className="flex flex-wrap gap-2 items-center">
                {/* Technologies */}
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
                
                {/* View Live Project Button */}
                <a
                  href={project.livePage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-cyan-800 p-2 text-sm font-medium text-white hover:bg-cyan-700 flex-shrink-0"
                >
                  View Live Project
                </a>
              </div> {/* end flex container */}
            </motion.div> {/* end details div */}
          </div>
        ))} {/* ends the projects map method */}
      </div>
    </div>        
  )
}

export default Projects;
