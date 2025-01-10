import project1 from "../assets/projects/amazon-mockup.webp";
import project2 from "../assets/projects/youtube.webp";
import project3 from "../assets/projects/new-notes.webp";
import project4 from "../assets/projects/unplugged-retreat.webp";

export const HERO_CONTENT = `Hola soy Esteban, I am a self-driven front-end developer who’s spent countless hours mastering the fine art of Google translate, Alphabet search (and, of course, web development). I’m passionate about continuous learning and building projects that make an impact. Now, I’m eager to join a dynamic team where I can contribute, grow, and help tackle the exciting chaos of one of the world’s fastest-evolving fields.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Amazon E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and delivery time.",
    technologies: ["HTML", "CSS", "React", "Javascript"],
    livePage: "https://estebonbon.github.io/mock-amazon/index.html",
  },
  {
    title: "Youtube clone",
    image: project2,
    description:
      "This project has a responsive design, with functioning anchor tags",
    technologies: ["HTML", "CSS", "Javascript"],
    livePage: "https://estebonbon.github.io/youtube-clone-project/",
  },
  {
    title: "New Note",
    image: project3,
    description:
      "This app helps users take notes. It also uses localstorage to save the users responses.",
    technologies: ["HTML", "CSS", "React", "Javascript"],
    livePage: "https://estebonbon.github.io/react-sticky-notes-project/",
  },
  {
    title: "Unplugged Retreat",
    image: project4,
    description:
      "This is a captivating design web design for a work retreat, the whole app is responsive. ",
    technologies: ["HTML", "CSS",],
    livePage: "https://estebonbon.github.io/Unplugged-Retreat-Website/",
  },
];

export const CONTACT = {
  located: "Ontario, Canada",
  email: "esteban.codedance@gmail.com",
};
