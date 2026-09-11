import Home from "@/components/Home";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ThemeBtn from "@/components/themeBtn";

export default function Page() {
  return (
    <>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ThemeBtn />
    </>
  );
}
