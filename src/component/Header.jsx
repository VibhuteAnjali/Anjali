import Blob from "./Blob";
// import pdf from "../../public/AnjaliResume.pdf";
import "../styles/Header.css";

export default function Header() {
  return (
    <div>
      <div id="app">
        <div className="home" id="hero">
          <div className="blob">
            <Blob />
          </div>
          <div className="title typewriter">
            <p>Hey👋, I am Anjali Vibhute </p>
            <h1>Fullstack Developer</h1>
            <a
              href="../../public/AnjaliResume.pdf"
              download="Anjali_Vibhute_Resume.pdf"
            >
              <button className="getResume">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
