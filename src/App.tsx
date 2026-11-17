import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Stack } from "@/components/sections/Stack"
import { About } from "@/components/sections/About"
import { Expertise } from "@/components/sections/Expertise"
import { Experience } from "@/components/sections/Experience"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  return (
    <div className="atmosphere min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <About />
        <Experience />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
