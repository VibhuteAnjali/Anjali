import img2 from "../assets/P1.1.png";
import img3 from "../assets/P2.png";
import img4 from "../assets/P4.png";
import img5 from "../assets/P1.png";
import img6 from "../assets/P3.png";
import img7 from "../assets/P6.png";
import Navbar from "./Navbar2";
export default function Promptopia() {
  return (
    <div>
      <Navbar />
      <div className="digiA">
        <div className="part1">
          <h1 className="projectName">Promptopia</h1>
          <div className="skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>ReactJS</p>
            <p>NextJs</p>
            <p>Tailwinds CSS</p>
            <p>MongoDB</p>
          </div>
          <div className="flex-horizontal">
            <div className="flex-vertical">
              <img src={img2} alt="websiteImg" className="img1" />
              <div className="project-ideas">
                <p>
                  <span>*</span> Built with Next.js, ensuring a smooth and
                  responsive user experience due to server side rendering.
                </p>
                <p>
                  <span>*</span> Backend is powered by Next.js, ensuring fast
                  and reliable performance.
                </p>
                <p>
                  <span>*</span> Create, Edit, Delete Prompts with ease.
                </p>
              </div>
            </div>
            <div className="flex-vertical">
              <img src={img3} alt="websiteImg" className="img_2" />
              <img src={img7} alt="websiteImg" className="img_2" />
            </div>
          </div>
          <div className="flex-horizontal m-1">
            <div className="flex-horizontal">
              <div className="flex-vertical">
                <img src={img4} alt="websiteImg" className="img_2" />
                <img src={img5} alt="websiteImg" className="img_2" />
              </div>
              <div className="width-40">
                <img src={img6} alt="websiteImg" className="img3" />
                <div className="project-ideas">
                  <p>
                    <span>*</span> Copy the prompt you like with ease.
                  </p>
                  <p>
                    <span>*</span> Be creative and share your prompts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
