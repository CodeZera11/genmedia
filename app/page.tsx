import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <About />
    </>
  )
}
