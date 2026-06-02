import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DistortedHelix from "../components/DistortedHelix";
import ProjectGrid from "../components/ProjectGrid";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact"; // Yeh line add ki
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#010409] min-h-screen">
      <Navbar />
      <Hero />
      <DistortedHelix /> 
      <ProjectGrid />
      <Experience />
      <TechStack /> 
      
      {/* Final Call to Action */}
      <Contact /> 
      
      <Footer />
    </main>
  );
}