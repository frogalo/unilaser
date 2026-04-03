import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Technology from "./components/Technology";
import Comparison from "./components/Comparison";
import Capabilities from "./components/Capabilities";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden">
      <Hero />
      <VideoSection />
      <Technology />
      <Comparison />
      <Capabilities />
      <About />
      <Contact />
    </div>
  );
}