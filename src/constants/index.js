import project1 from "../assets/projects/amazon-mockup.webp";
import project2 from "../assets/projects/youtube.webp";
import project3 from "../assets/projects/new-notes.webp";
import project4 from "../assets/projects/unplugged-retreat.webp";

export const HERO_CONTENT = `Hola soy Esteban, I am a self-driven Front End Developer who’s spent countless hours mastering the fine art of Google Translate, Alphabet Search (and, of course, web development).`;

export const ABOUT_TEXT = [
  `Hello! I’m Esteban, a Front End Developer based in Ontario, Canada. My coding journey began in high school with VEX Robotics and Arduino projects, sparking my curiosity for problem-solving. Inspired by a coding BootCamp and creators like Mark Rober, I discovered my passion for blending creativity and technology to build impactful projects.`,
  `When I’m not coding, you’ll find me with my Les Paul guitar and Blues Junior Deluxe amp, crafting "bedroom concerts" or experimenting with new tunes. I also value spending time with family and friends, as these relationships fuel my creativity and motivation.`,
  `Before tech, I worked carpentry, landscaping, and hospitality roles that shaped my resilience, teamwork, and presentation skills. I’m ready to channel these strengths into a tech environment as a creative and solutions oriented professional.`,
];


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
    role: "Front End Developer",
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
      "A fully functional multipage e-commerce website built with React, featuring dynamic rendering for seamless product listing, shopping cart management, and delivery time tracking. The app leverages APIs to fetch and display real-time product data, ensuring a responsive and interactive user experience.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    livePage: "https://estebonbon.github.io/mock-amazon/index.html",
  },
  {
    title: "Youtube clone",
    image: project2,
    description:
      "This project features a responsive design built with Flexbox and functioning anchor tags, mimicking the navigation experience of a live website.",
    technologies: ["HTML", "CSS", "JavaScript"],
    livePage: "https://estebonbon.github.io/youtube-clone-project/",
  },
  {
    title: "New Notes",
    image: project3,
    description:
      "A user-friendly note-taking app designed to save and store notes locally. By leveraging local storage, it ensures users notes remain accessible even after closing the browser.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    livePage: "https://estebonbon.github.io/react-sticky-notes-project/",
  },
  {
    title: "Unplugged Retreat",
    image: project4,
    description:
    "A visually captivating and fully responsive website designed for a work retreat. Built with Flexbox, this project ensures seamless adaptability across all screen sizes.",
    technologies: ["HTML", "CSS",],
    livePage: "https://estebonbon.github.io/Unplugged-Retreat-Website/",
  },
];

export const CONTACT = {
  located: "Ontario, Canada",
  email: "estebancodecity@gmail.com",
};

const oldHero = 
  "Hola soy Esteban, I am a self-driven front-end developer who’s spent countless hours mastering the fine art of Google Translate, Alphabet Search (and, of course, web development). I’m passionate about continuous learning and building projects that make an impact. My goal is to contribute, grow, and work on innovative solutions in one of the world’s fastest-evolving fields."

