import "../styles/About.css";
import Blob from "./Blob";
export default function About() {
  return (
    <div className="about" id="About">
      <div className="heading">
        <h2>*About</h2>
      </div>
      <div className="content">
        <Blob style="blob1" />
        <div className="about-content">
          <p>
            Hi, I&apos;m Anjali, a dedicated MERN stack developer with a passion
            for crafting user-friendly interfaces using HTML, CSS, and
            JavaScript. My expertise in MongoDB, Express.js, React, Next.js and
            Node.js allows me to build seamless, responsive web applications
            that captivate users and drive engagement. I take pride in creating
            beautiful and functional web experiences that provide intuitive and
            efficient user interactions.
          </p>
        </div>
        <Blob style="blob2" />
      </div>
    </div>
  );
}
