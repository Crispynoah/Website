import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { Comparison } from "@/components/sections/comparison";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Comparison />
      <Process />
      <About />
      <Contact />
      <ContactForm />
      <Footer />
    </main>
  );
}
