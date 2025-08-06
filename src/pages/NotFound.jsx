import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarsBackground from "../components/StarsBackground";
import ThemeToggle from "../components/ThemeToggle";
import { ArrowRight } from "lucide-react";
import notfound from "../assets/notfound/notfound.png";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Theme Toogle */}
      <ThemeToggle />

      {/* Background effect */}
      <StarsBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-8">
        {/* Image Section */}
        <div className="my-10 flex items-center justify-center">
          <img
            src={notfound}
            alt="Page Not Found"
            className="w-full max-w-md mx-auto my-[2rem]"
            loading="lazy"
          />
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-4xl mb-4 text-glow text-primary font-medium">
          There's NOTHING here...
        </h1>

        {/* Subtext */}
        <p className="text-foreground/80 md:text-lg mb-6">
          ...maybe the page you're looking for is not found or never existed.
        </p>

        {/* Back to home link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-primary text-lg font-medium cursor-pointer no-underline hover:text-white"
        >
          Back to home <ArrowRight />
        </a>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
