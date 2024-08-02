import img from "../assets/IE1.png";
import img2 from "../assets/IE2.png";
import img3 from "../assets/IE3.png";
import img4 from "../assets/IE4.png";
import img5 from "../assets/IE5.png";
import "../styles/InstaEats.css";
import Navbar from "./Navbar2";
export default function InstaEats() {
  return (
    <div>
      <Navbar />
      <div className="digiA">
        <div className="part1">
          <h1 className="projectName">
            InstaEats - Social media platform for food bloggers
          </h1>
          <div className="skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>ReactJS</p>
            <p>MongoDB</p>
            <p>Google Cloud</p>
            <p>Node.js</p>
            <p>Express.js</p>
          </div>
          <div className="flex-horizontal">
            <div className="flex-vertical">
              <img src={img} alt="websiteImg" className="img1" />
              <div className="project-ideas">
                <p>
                  <span>*</span> Built with ReactJS, ensuring a smooth and
                  responsive user experience.
                </p>
                <p>
                  <span>*</span> Backend is powered by NodeJS and ExpressJS,
                  ensuring fast and reliable performance.
                </p>
                <p>
                  <span>*</span> Create a Post, Like a Post, Create Profile,
                  Edit a Profile.
                </p>
              </div>
            </div>
            <div className="flex-vertical">
              <img src={img4} alt="websiteImg" className="img_2" />
              <img src={img2} alt="websiteImg" className="img_2" />
            </div>
          </div>
          <div className="flex-horizontal m-1">
            <div className="flex-horizontal">
              <div className="flex-vertical">
                <img src={img3} alt="websiteImg" className="img_2" />
                <img src={img5} alt="websiteImg" className="img_2" />
              </div>
              <div className="width-40">
                <img src={img4} alt="websiteImg" className="img3" />
                <div className="project-ideas">
                  <p>
                    <span>*</span> Leveraging cloud technologies, InstaEats
                    offers scalable storage solutions for user reviews, photos,
                    and restaurant data.
                  </p>
                  <p>
                    <span>*</span> Like and Save your favorite content with
                    ease.
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
