import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import Technologies from "./components/technologies.jsx";


const App = () => {
  return(
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div> {/* this line ends th fixed inset */}

      <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Technologies />
      </div>
    </div> /* this line ends the main div  */
  )
}

export default App;

