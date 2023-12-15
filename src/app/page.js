"use client";
import About from "@/Components/About/About";
import Experience from "@/Components/Experience/Experience";
import Feature from "@/Components/Feature/Feature";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Header/Hero";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";

export default function page() {
  return (
    <div className="font-roboto_normal text-slate-900">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Feature />
      <Skills />
      <Footer />
    </div>
  );
}
