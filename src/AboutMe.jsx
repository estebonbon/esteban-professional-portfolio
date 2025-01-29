import Contact from "./components/contact";
import { ABOUT_TEXT } from "./constants";

const AboutMe = () => {
  return (
    <div className="about-page py-8 lg:pt-16 px-8">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
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
            href="/Esteban-Sarmiento-Front-End-Developer-PDF.pdf"
            download
            aria-label="Download the Resume as a PDF. Opens in a new window"
            className="inline-block px-6 py-3 bg-cyan-800 text-white font-medium rounded-lg shadow-lg hover:bg-cyan-700">
            Download Resume (PDF)
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default AboutMe;


