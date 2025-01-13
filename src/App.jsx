import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./Home"; // Home component
import AboutMe from "./AboutMe"; // About Me page component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Home />} />

        {/* About Me Route */}
        <Route path="/about" element={<AboutMe />} />

        {/* Catch-All Route */}
        <Route
          path="*"
          element={<div className="text-center mt-20">404 - Page Not Found</div>}
        />
      </Routes>
    </Router>
  );
};

export default App;


