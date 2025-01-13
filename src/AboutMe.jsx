import Contact from "./components/contact";
import { ABOUT_TEXT } from "./constants";

const AboutMe = () => {
  return (
    <div className="about-page py-8 lg:pt-16 px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      {/* Text Section */}
      <div className="max-w-4xl mx-auto">
        {ABOUT_TEXT.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Bottom Section with GIF and Resume */}
      <div className="max-w-4xl mx-auto mt-12 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
        {/* GIF Section */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjQ2YjRpYmVrYTBsYjRjNmRyeTVqNzc4ZnN2NmhlaDdvanE4ZzQ1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jRyHn06KvgqhmUjG3J/giphy.gif"
            alt="Guitar GIF"
            className="max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Resume Download Section */}
        <div className="text-center lg:flex lg:justify-center lg:text-left lg:w-1/2">
          <a
            href="./public/Esteban-Sarmiento-Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow-lg hover:bg-cyan-700"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default AboutMe;


