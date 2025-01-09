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
          whileInView={{ opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 1 }} 
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
                  <RiReactjsLine className="text-7xl text-cyan-400" />
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4">
                  <SiHtml5 className="text-7xl text-orange-500" />
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4"> 
                  <SiJavascript className="text-7xl text-yellow-400" />
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4">
                  <SiCss3 className="text-7xl text-blue-500" />
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4">
                  <SiTailwindcss className="text-7xl text-teal-500" />
              </motion.div>
              <motion.div 
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(4)}
                  className="p-4">
                  <FiTerminal className="text-7xl text-green-500" />
              </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies