import profilepic from "../assets/final-portfolio-picture.webp"
import { HERO_CONTENT } from "../constants"
import {motion} from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5} }
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:p-8">
                <motion.img 
                src={profilepic} 
                alt="Ravi Profile Pic" 
                className="border border-stone-900 rounded-3xl"
                width={650}
                height={650}
                initial={{ x:100, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 1, delay: 1.5}}/>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
                <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center lg:items-start mt-10">
                  <motion.h1 
                  className="pb-2 text-4xl tracking-tighter lg:text-8xl"
                  variants={childVariants}>Esteban Sarmiento</motion.h1>
                  <motion.span 
                  className="bg-gradient-to-t bg-[rgb(136,252,226)] bg-clip-text text-3xl tracking-tight text-transparent"
                  variants={childVariants}>Front End Developer</motion.span>
                  <motion.p 
                  className="my-2 max-w-lg /* sets a limimi */ py-6 text-xl leading-relaxed tracking-tighter /* leading is for line spacing */"
                  variants={childVariants}>
                    {HERO_CONTENT}
                  </motion.p>
                  <motion.a href="https://estebonbon.github.io/repo-gallery/" target="_blank" rel="noopener noreferrer"  className="bg-white rounded-full p-4 text-sm text-stone-900 mb-10 hover:bg-stone-300 font-bold"
                  variants={childVariants}> View Repo-gallery </motion.a>
                </motion.div>
            </div>
        </div> {/* Inside the flex container paramaters */}
    </div>
  )
}

export default Hero
