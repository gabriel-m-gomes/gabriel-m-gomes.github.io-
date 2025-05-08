import Hero from "./sections/Hero";
import Navbar from "./sections/NavBar";
import About from "./sections/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-start justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-12 mt-10">
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
