import profilepic from "../assets/raviKumarProfile.webp"
import { HERO_CONTENT } from "../constants"

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:p-8">
                <img src={profilepic} alt="Ravi Profile Pic" className="border border-stone-900 rounded-3xl"/>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start mt-10">
                <h1 className="pb-2 text-4xl tracking-tighter lg:text-8xl">Esteban Sarmiento</h1>
                <span className="bg-gradient-to-t from-stone-200 to-stone-900 bg-clip-text text-3xl tracking-tight text-transparent">Frontend Developer</span>
                <p className="my-2 max-w-lg /* sets a limimi */ py-6 text-xl leading-relaxed tracking-tighter /* leading is for line spacing */">
                  {HERO_CONTENT}
                </p>
                <a href="/" target="_blank" rel="noopener noreferrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"> Download Resume </a>
              </div>
            </div>
        </div> {/* Inside the flex container paramaters */}
    </div>
  )
}

export default Hero
