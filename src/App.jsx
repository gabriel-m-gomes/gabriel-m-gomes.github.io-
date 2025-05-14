import { useEffect } from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/NavBar";
import About from "./sections/About";
import Experience from "./sections/Experience";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = document.querySelector(".mouse-glow");
      if (glow) {
        glow.style.setProperty("--mouse-x", `${e.clientX}px`);
        glow.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="mouse-glow" />
      <Navbar />
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-12 mt-10">
        <div className="lg:w-1/2">
          <Hero />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-50">
          <About />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
