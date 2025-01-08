import profilepic from "../assets/raviKumarProfile.webp"

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:p-8">
                <img src={profilepic} alt="Ravi Profile Pic"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
