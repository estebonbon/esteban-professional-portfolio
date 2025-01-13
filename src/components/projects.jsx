import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2 
      className="my-20 text-center text-4xl"
     /*  whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.50 }}  */
      >Projects</motion.h2>
      <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100}}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4">
                    <img src={project.image} 
                      width={250}
                      height={250}
                      alt={project.title}
                      className="mb-6 rounded" />
                </motion.div> {/* end the image div */}
                <motion.div 
                  whileInView={{ opacity: 1, x: 0}}
                  initial={{ opacity: 0, x: 100}}
                  transition={{ duration: 1}}
                  className="w-full max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                    <p className="mb-4 text-stone-400">{project.description}</p>
                    <div className="flex flex-wrap items-center ">
                      {project.technologies.map((tech, index) => (
                        <span className=" mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* View Live Project Button */}
                    <div className="w-full sm:w-auto">
                      <a
                        href={project.livePage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded bg-cyan-600 p-2 text-sm font-medium text-white hover:bg-cyan-700 flex-shrink-0">
                        View Live Project
                      </a>
                    </div>
                  {/* <a href={project.livePage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mr-2 rounded bg-cyan-600 p-2 text-sm font-medium text-white hover:bg-cyan-700">
                    View Live Project
                  </a> */}
                </motion.div>
            </div>
          ))} {/* ends the projects map method */}
      </div>
    </div>        
  )
}

export default Projects