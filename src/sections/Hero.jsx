import Contact from "../components/Contact";
import Skills from "../components/Skills.jsx";

const Hero = () => {
  return (
    <div className="flex-1 text-[#c2e8f0] space-y-4">
      <p className=" text-[#64ffda] font-medium text-sm">Hello, my name is</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
        Gabriel Macedo.
      </h1>
      <h2 className=" text-[#64ffda] text-lg font-medium">
        I am Back End Developer.
      </h2>
      <h3 className="text-base font-medium">
        Focused on building clean, reliable, and maintainable APIs that
        <br className="hidden sm:block" />
        support great web applications.
      </h3>
      <Contact />
      <Skills />
    </div>
  );
};

export default Hero;
