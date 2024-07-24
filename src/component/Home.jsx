import "../styles/Home.css";
import About from "./About";
import Courosel from "./Courosel";
import Projects from "./Projects";
import Header from "./Header";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Courosel />
      <Projects />
    </>
  );
}
