import { RiReactjsLine } from "react-icons/ri"
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from "react-icons/si";
import { FiTerminal } from "react-icons/fi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }
})


const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
        /*   whileInView={{ opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 1 }}  */
          className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100}}
          transition={{ duration: 1.5 }} 
          className="flex flex-wrap items-center justify-center gap-4">
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}>
                  <RiReactjsLine className="text-7xl text-cyan-400 peer" />
                  <span className="absolute top px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 peer-hover:bg-cyan-500 peer-hover:text-black peer-hover:opacity-100">
                    React.js
                  </span>
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4">
                  <SiHtml5 className="text-7xl text-orange-500 peer" />
                  <span className="absolute bottom-[-20px] right-[20px] px-2 py-1 text-sm bg-gray-800 text-white rounded  opacity-0 peer-hover:bg-orange-500 peer-hover:text-black peer-hover:opacity-100">
                    HTML5
                  </span>
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4"> 
                  <SiJavascript className="text-7xl text-yellow-400 peer" />
                  <span className="absolute bottom-[-21px] right-[8px] px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 peer-hover:bg-yellow-400 peer-hover:text-black peer-hover:opacity-100">
                    JavaScript
                  </span>
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4">
                  <SiCss3 className="text-7xl text-blue-500 peer" />
                  <span className="absolute bottom-[-21px] left-[26px] top px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 peer-hover:bg-blue-500 peer-hover:text-black peer-hover:opacity-100">
                    CSS3
                  </span>
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4">
                  <SiTailwindcss className="text-7xl text-teal-500 peer" />
                  <span className="absolute bottom-[-8px] left-[1px] px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 peer-hover:bg-teal-500 peer-hover:text-black peer-hover:opacity-100">
                    Tailwind.css
                  </span>
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4">
                  <FiTerminal className="text-7xl text-green-500 peer" />
                  <span className="absolute bottom-[-10px] right-[-1px] top px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 peer-hover:bg-green-500 peer-hover:text-black peer-hover:opacity-100">
                    Terminal.bash
                  </span>
              </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies