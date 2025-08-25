// ContactSection.jsx or ContactSection.tsx
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as Toast from "@radix-ui/react-toast";


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

const ContactSection = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [openToast, setOpenToast] = useState(false);
  const [toastType, setToastType] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setToastType("");

    try {
      const result = await emailjs.sendForm(
        "service_ghcyqf8", // ✅ Replace with your actual Service ID
        "template_wshjxii", // ✅ Replace with your actual Template ID
        form.current,
        "yqJKHM_siEcNUONV1" // ✅ Replace with your actual Public Key
      );

      console.log("SUCCESS!", result.text);
      setIsSubmitting(false);
      setStatus("Message sent successfully!");
      setToastType("success");
      setOpenToast(true);
      form.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      setIsSubmitting(false);
      setStatus("Failed to send message. Please try again.");
      setToastType("error");
      setOpenToast(true);
    }
  };

  return (
    <Toast.Provider swipeDirection="right" duration={3000}>
      <section className="py-24 px-4 relative bg-secondary/30" id="contact">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            I'd Love To Here From You-ReachOut For Any Opportunities Or
            Questions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column: contact info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:setwetrahul325@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      setwetrahul325@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+91 8448253664"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 844-8253-664
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <span className="text-muted-foreground">
                      Ghaziabad, Uttar Pradesh
                    </span>
                  </div>
                </div>

                <div className="pt-8">
                  <h4 className="font-medium mb-4">Connect With Me</h4>
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
                </div>
              </div>
            </div>

            {/* Right column: contact form */}
            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6">
                Contact with Me 🚀
              </h3>

              <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-start"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-start"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-start"
                  >
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="1234567890"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-start"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cosmic-button w-full flex justify-center items-center gap-2 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <Send size={26} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast */}
      <Toast.Root
        open={openToast}
        onOpenChange={setOpenToast}
        className={`fixed bottom-4 right-4 z-50 p-4 rounded shadow text-white transition-all ${
          toastType === "success" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        <Toast.Title className="font-bold">{status}</Toast.Title>
        <Toast.Description>{status}</Toast.Description>
        <Toast.Action asChild altText="Close">
          <button
            onClick={() => setOpenToast(false)}
            className="ml-4 px-2 py-1 text-black rounded"
          >
            Close
          </button>
        </Toast.Action>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-96 max-w-full z-[999]" />
    </Toast.Provider>
  );
};

export default ContactSection;
