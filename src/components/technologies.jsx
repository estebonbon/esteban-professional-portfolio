import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from "react-icons/si";
import { FiTerminal } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pb-24">
      <motion.h2
        initial={shouldReduceMotion ? {} : { opacity: 0, y: -100 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? {} : { duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, x: -100 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
        transition={shouldReduceMotion ? {} : { duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React */}
        <motion.div
          initial="initial"
          animate={shouldReduceMotion ? "initial" : "animate"}
          variants={shouldReduceMotion ? {} : iconVariants(4)}
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 peer" aria-label="React Icon"/>
          <span className="absolute top px-2 py-1 text-sm text-white rounded opacity-0 peer-hover:bg-stone-700 peer-hover:opacity-100 transition-opacity" >
            React.js
          </span>
        </motion.div>

        {/* HTML5 */}
        <motion.div
          initial="initial"
          animate={shouldReduceMotion ? "initial" : "animate"}
          variants={shouldReduceMotion ? {} : iconVariants(4)}
          className="p-4"
        >
          <SiHtml5 aria-hidden="true" className="text-7xl text-orange-500 peer" aria-label="HTML5 Icon"/>
          <span className="absolute bottom-[-20px] right-[20px] px-2 py-1 text-sm text-white rounded opacity-0 peer-hover:bg-stone-700 peer-hover:opacity-100 transition-opacity">
            HTML5
          </span>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          initial="initial"
          animate={shouldReduceMotion ? "initial" : "animate"}
          variants={shouldReduceMotion ? {} : iconVariants(4)}
          className="p-4"
        >
          <SiJavascript aria-hidden="true" className="text-7xl text-yellow-400 peer" aria-label="JavaScript Icon" />
          <span className="absolute bottom-[-21px] right-[8px] px-2 py-1 text-sm text-white rounded opacity-0 peer-hover:bg-stone-700 peer-hover:opacity-100 transition-opacity">
            JavaScript
          </span>
        </motion.div>

        {/* CSS3 */}
        <motion.div
          initial="initial"
          animate={shouldReduceMotion ? "initial" : "animate"}
          variants={shouldReduceMotion ? {} : iconVariants(4)}
          className="p-4"
        >
          <SiCss3 aria-hidden="true" className="text-7xl text-blue-500 peer" aria-label="CSS3 Icon"/>
          <span className="absolute bottom-[-21px] left-[26px] px-2 py-1 text-sm text-white rounded opacity-0 peer-hover:bg-stone-700 peer-hover:opacity-100 transition-opacity">
            CSS3
          </span>
        </motion.div>

        {/* Tailwind */}
        <motion.div
          initial="initial"
          animate={shouldReduceMotion ? "initial" : "animate"}
          variants={shouldReduceMotion ? {} : iconVariants(4)}
          className="p-4"
        >
          <SiTailwindcss className="text-7xl text-teal-500 peer" aria-label="Tailwind Icon" />
          <span aria-hidden="true" className="absolute bottom-[-8px] left-[1px] px-2 py-1 text-sm text-white rounded opacity-0 peer-hover:bg-stone-700 peer-hover:opacity-100 transition-opacity">
            Tailwind.css
          </span>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial="initial"
          animate={shouldReduceMotion ? "initial" : "animate"}
          variants={shouldReduceMotion ? {} : iconVariants(4)}
          className="p-4"
        >
          <FiTerminal className="text-7xl text-green-500 peer" aria-label="Terminal Icon" />
          <span aria-hidden="true" className="absolute bottom-[-10px] right-[-1px] px-2 py-1 text-sm text-white rounded opacity-0 peer-hover:bg-stone-700 peer-hover:opacity-100 transition-opacity">
            Terminal
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
