import img from "../assets/FG1.png";
import img2 from "../assets/FG2.png";
import img3 from "../assets/FG3.png";
import img4 from "../assets/FG4.png";
import img5 from "../assets/FG5.png";
import img6 from "../assets/FG6.png";
import img7 from "../assets/FG7.png";
import img8 from "../assets/FG8.png";
import img9 from "../assets/FG9.png";
import Navbar from "./Navbar2";
export default function FairmountGrand() {
  return (
    <div>
      <Navbar />
      <div className="digiA">
        <div className="part1">
          <h1 className="projectName">
            Fairmount Grand - Hotel Booking Website
          </h1>
          <div className="skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>ReactJS</p>
            <p>SQL</p>
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
                  <span>*</span> Proper distribution of content to engage user
                </p>
              </div>
            </div>
            <div className="flex-vertical">
              <img src={img3} alt="websiteImg" className="img_2" />
              <img src={img2} alt="websiteImg" className="img_2" />
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
                    <span>*</span> Advertising all the features & amenities of
                    the Hotel
                  </p>
                  <p>
                    <span>*</span> Information of the rooms and their prices
                    ensures transperency
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-horizontal">
            <div className="flex-vertical">
              <img src={img9} alt="websiteImg" className="img1" />
            </div>
            <div className="flex-vertical">
              <div className="project-ideas">
                <p>
                  <span>*</span> Book Rooms & check Existing Bookings with ease
                </p>
              </div>
              <img src={img7} alt="websiteImg" className="img_2" />
              <img src={img8} alt="websiteImg" className="img_2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
