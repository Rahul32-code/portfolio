import { motion } from "framer-motion";
import { ArrowUp, Facebook, Github, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  {
    icon: <Linkedin className="text-primary hover:opacity-75" />,
    link: "https://www.linkedin.com/in/rahul-gupta-8497aa249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: <Github className="text-primary hover:opacity-75" />,
    link: "https://github.com/Rahul32-code",
  },
  {
    icon: <Instagram className="text-primary hover:opacity-75" />,
    link: "https://www.instagram.com/rahuldeveloper/",
  },
  {
    icon: <Facebook className="text-primary hover:opacity-75" />,
    link: "https://www.facebook.com/rahul.webdeveloper/",
  },
];
const Footer = () => {
  return (
    <footer className="pt-12 pb-8 px-4 relative border-border mt-12 flex flex-col justify-between items-center">
        <div className="flex space-x-4 justify-center">
          {socialLinks.map((social, index) => (
            <a
            key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      <div className="flex flex-row-reverse justify-between items-center w-full">
        <p className="text-sm text-muted-foreground text-center flex-1">
          Rahul Gupta &copy; 2025. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
