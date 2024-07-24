import img from "../assets/WO1.png";
import img2 from "../assets/WO2.png";
import img3 from "../assets/WO3.png";
import img4 from "../assets/WO4.png";
import img5 from "../assets/WO5.png";
import img6 from "../assets/WO6.png";
import Navbar from "./Navbar2";
export default function WildOasis() {
  return (
    <div>
      <Navbar />
      <div className="digiA">
        <div className="part1">
          <div className="flex-horizontal">
            <div className="flex-vertical">
              <img src={img} alt="da" className="img1" />
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
                  <span>*</span> Check-In, Check-Out, Add a booking, delete a
                  Booking with ease.
                </p>
              </div>
            </div>
            <div className="flex-vertical">
              <img src={img3} alt="da" className="img_2" />
              <img src={img2} alt="da" className="img_2" />
            </div>
          </div>
          <div className="flex-horizontal m-1">
            <div className="flex-horizontal">
              <div className="flex-vertical">
                <img src={img4} alt="da" className="img_2" />
                <img src={img5} alt="da" className="img_2" />
              </div>
              <div className="width-40">
                <img src={img6} alt="da" className="img3" />
                <div className="project-ideas">
                  <p>
                    <span>*</span> Track key metrics such as total sales, the
                    number of checked-in guests, and more.
                  </p>
                  <p>
                    <span>*</span> The dashboard is designed to offer quick
                    insights and support informed decision-making.
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
