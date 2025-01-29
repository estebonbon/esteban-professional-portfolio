import {CONTACT} from "../constants"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="lg:flex lg:items-center lg:justify-between lg:mx-auto lg:max-w-4xl lg:text-left text-center">
        {/* Left Content */}
        <div>
          <p className="my-4 lg:my-2" aria-label="location"> <span className="ml-2"> &#128205;</span> Location: {CONTACT.located}</p>
          <p className="my-4 lg:my-2">
            <a href="mailto:estebancodecity@gmail.com" 
              className="border-b border-transparent hover:border-stone-400">
              <span className="mr-2" role="img" aria-label="Email">&#x1F4E7;</span> Mail: {CONTACT.email}
            </a>
          </p>        
        </div> {/* Close Left Content */}        
        {/* Right Content */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/esteban-sarmiento/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin Profile">
             <FaLinkedin className="text-5xl mr-10 hover:text-[#c5a358ce]"/> 
          </a>
          <a
            href="https://github.com/estebonbon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
            <FaGithub className="text-5xl hover:text-[#c5a358ce]"/>
          </a>
        </div>
      </div>
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
      
      
