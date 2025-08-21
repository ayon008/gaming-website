import Hero from "./components/Hero";
import About from "./components/About";
import Feature from "./components/Feature";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative w-screen !overflow-x-hidden">
      <Hero />
      <About />
      <Feature />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
}
