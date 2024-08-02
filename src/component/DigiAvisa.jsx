import img from "../assets/DA1.png";
import img2 from "../assets/DA2.png";
import img3 from "../assets/DA3.png";
import img4 from "../assets/DA4.png";
import Mimg1 from "../assets/mobile1.png";
import Mimg2 from "../assets/mobile2.png";

import "../styles/DigiAvisa.css";
import Navbar from "./Navbar2";
export default function DigiAvisa() {
  return (
    <>
      <Navbar />
      <div className="digiA">
        <div className="part1">
          <h1 className="projectName">DigiAvisa - Digital Marketing Website</h1>
          <div className="skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>ReactJS</p>
            <p>MongoDB</p>
            <p>Node.js</p>
            <p>Express.js</p>
          </div>
          <div className="flex-horizontal">
            <div className="flex-vertical">
              <img src={img} alt="websiteImg" className="img1" />
            </div>
            <div className="flex-vertical">
              <div className="project-ideas">
                <p>
                  <span>*</span> Perfect color combination.
                </p>
                <p>
                  <span>*</span> Appropriate use of fonts.
                </p>
              </div>
              <img src={img2} alt="websiteImg" className="img2" />
              <img src={img3} alt="websiteImg" className="img2" />
            </div>
          </div>
          <div className="flex-horizontal">
            <div className="flex-horizontal">
              <img src={Mimg1} alt="websiteImg" className="img2" />
              <img src={Mimg2} alt="websiteImg" className="img2" />
            </div>
            <div className="flex-vertical">
              <div className="project-ideas">
                <p>
                  <span>*</span> Powerful and precise tagline to attract the
                  user.
                </p>
                <p>
                  <span>*</span> Effective use of illustrations to make it
                  impactful.
                </p>
              </div>
              <img src={img4} alt="websiteImg" className="img3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
