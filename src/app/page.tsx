import Hero from "./components/Hero";
import About from "./components/About";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <div className="min-h-screen relative w-screen !overflow-x-hidden">
      <Hero />
      <About />
      <Feature />
    </div>
  );
}
