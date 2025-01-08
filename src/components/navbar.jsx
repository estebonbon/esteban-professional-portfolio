import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from "../assets/raviKumarLogo.webp"

const navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/>
        </a>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/esteban-sarmiento-565470341/" 
          target="_blank" 
          rel="nooopener noreferrer"
          aria-label="Linkedin Profile">
            <FaLinkedin /> {/* comes from the React Icons library. It provides pre-made icon components for popular brands like LinkedIn, Facebook, etc. */}
          </a>
        <a href="https://github.com/estebonbon" 
          target="_blank" 
          rel="nooopener noreferrer"
          aria-label="Github">
            <FaGithub /> 
          </a>
      </div>
    </nav>
  )
}

export default navbar