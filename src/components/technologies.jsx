import { RiReactjsLine } from "react-icons/ri"
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from "react-icons/si";
import { FiTerminal } from "react-icons/fi";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4">
            <SiHtml5 className="text-7xl text-orange-500" />
          </div>
          <div className="p-4"> 
            <SiJavascript className="text-7xl text-yellow-400" />
          </div>
          <div className="p-4">
            <SiCss3 className="text-7xl text-blue-500" />
          </div>
          <div className="p-4">
            <SiTailwindcss className="text-7xl text-teal-500" />
          </div>
          <div className="p-4">
            <FiTerminal className="text-7xl text-green-500" />
          </div>
      </div>
    </div>
  )
}

export default Technologies