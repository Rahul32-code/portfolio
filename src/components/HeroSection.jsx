import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 mt-20 sm:mt-0"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rahul{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Developer{" "}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          <span className="text-primary">Hi, I’m Rahul Gupta, a Full Stack Developer </span>
         passionate about creating dynamic, responsive web
           applications with clean code and seamless user experiences.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#about"
              className="cosmic-button text-white opacity-0 animate-fade-in-delay-4"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
