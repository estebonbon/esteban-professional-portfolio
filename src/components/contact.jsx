import {CONTACT} from "../constants"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="border-t border-stone-900  pb-5 lg:pb-20">
      <h2 className="lg:my-20 my-10 text-center text-4xl">Get in Touch</h2>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:mx-auto lg:max-w-4xl lg:text-left text-center">
        {/* Left Content Contact Me*/}
        <div className="lg:flex-1">
          <h3 className="text-center text-3xl text-cyan-800">Contact Me</h3>
          <p className="my-4 lg:my-6 py-3 ">
            <a href="mailto:estebancodecity@gmail.com" 
              className="border-b border-transparent hover:border-stone-400 text-[17px]">
              <span className="" role="img" aria-label="Email">&#x1F4E7;</span> Mail: {CONTACT.email}
            </a>
          </p>        
        </div> {/* Close Left Content */}        
        {/* Middle Content Follow Me */}
        <div className="lg:flex-1 text-center">
          <h3 className="text-center text-3xl text-cyan-800 ">Follow Me</h3>
          <div className="mx-8 my-4 lg:my-6 py-3 flex items-center justify-center gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/esteban-sarmiento/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin Profile">
              <FaLinkedin className="text-4xl mr-10 hover:text-[#c5a358ce]"/> 
            </a>
            <a
              href="https://github.com/estebonbon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github">
              <FaGithub className="text-4xl hover:text-[#c5a358ce]"/>
            </a>
          </div> 
        </div> {/* Close middle content */}
        <div className="lg:flex-1"> {/* Right content Meet Me */}
        <h3 className="text-center text-3xl  text-cyan-800">Meet Me</h3>
          <p className="my-4 lg:my-6 mr-2 py-3 lg:text-center text-[17px]" aria-label="location"> <span className=""> &#128205;</span> Location: {CONTACT.located}
          </p>        
        </div> {/* Close Right Content */}  
      </div>
      <p className="text-[14px] text-center mt-10 lg:mt-20"> Copyright 2025 | <span className="">Esteban Sarmiento</span></p>
    </div>
  );
};


export default Contact

/* import ReCAPTCHA from "react-google-recaptcha";

const Contact= () => {
  const onCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <ReCAPTCHA
        sitekey="your-site-key"
        onChange={onCaptchaChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
       */
      
      
