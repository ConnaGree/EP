import { Contact } from "lucide-react";
import About from "../../components/about/about";
import Hero from "../../components/hero/hero";
import Projects from "../../components/projects/projects";
import Marquee from "../../components/ui/marquee";
import ContactForm from "../../components/contact/contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Home;
