import Hero from "./components/hero.jsx";
import Technologies from "./components/technologies.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Skillset from "./components/skillset.jsx";


const Home = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="mx-auto px-8">
        <section id="hero">
          <Hero />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="skillset">
          <Skillset />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};


export default Home;