import {CONTACT} from "../constants"
const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-200">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">
          {CONTACT.address}
        </p>
        <p className="my-4">
          {CONTACT.phoneNo}
        </p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}

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
      
      
