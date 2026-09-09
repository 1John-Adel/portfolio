import Image from "next/image";
import Home from '@/components/Home';
import About from '@/components/about';
import Skills from '@/components/skills';

export default function Page() {
  return (
    <main >
      <Home />
      <About />
      <Skills />
    </main>
  );
}
