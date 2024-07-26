import "../styles/Projects.css";
import Gallery from "./Gallery";
import img1 from "../assets/DAmock.png";
import img2 from "../assets/MOCK2.png";
import img3 from "../assets/WOMock.png";
import img4 from "../assets/FGMock.png";
export default function Projects() {
  const ProjectInfo = [
    {
      para: "The project is a digital marketing and email marketing website created with HTML, CSS, ReactJS, NodeJS, and Express.The frontend, developed with ReactJS, provides a dynamic and responsive user interface  while NodeJS and Express handle efficient server-side operations.",
      image: img1,
      title: "Digital Marketing Website",
      url: "DigiAvisa",
      code: "https://github.com/VibhuteAnjali/DigiAvisaTech",
      websiteLink: "https://digi-avisa-tech.vercel.app",
    },
    {
      para: "InstaEats is a social media platform I developed for food enthusiasts to review and discover restaurants. Utilizing ReactJS, CSS, and JavaScript for a responsive frontend, and NodeJS and ExpressJS for a robust backend, it offers a seamless user experience. The platform features cloud integration for scalable storage, allowing users to post reviews, share photos, and connect with a community of food lovers.",
      image: img2,
      title: "InstaEats Social Media Website",
      url: "InstaEats",
      code: "https://github.com/VibhuteAnjali/instaEats",
      websiteLink: "",
    },
    {
      para: "WildOasis is a hotel management platform I developed to streamline operations. Using ReactJS, CSS, and JavaScript for the interface, and NodeJS with ExpressJS for the backend, it offers efficient check-in/check-out, cabin management, and real-time sales tracking. The intuitive dashboard provides a comprehensive overview of sales, guest status, and an interactive sales graph, enhancing operational efficiency and profitability.",
      image: img3,
      title: "Hotel Management Website",
      url: "WildOasis",
      code: "https://github.com/VibhuteAnjali/The-Wild-Oasis",
      websiteLink: "https://thewildoasisapp.vercel.app",
    },
    {
      para: "Fairmont Grand is a hotel's Website I developed to facilitate user reservations and promote Fairmont Grand. Using ReactJS, CSS, and JavaScript for the interface, and NodeJS with ExpressJS for the backend, it allows users to easily book stays and helps showcases hotel amenities and offers, enhancing both user experience and hotel visibility.",
      image: img4,
      title: "Hotel Booking Website",
      url: "FairmontGrand",
      code: "https://github.com/VibhuteAnjali/Fairmont-Grand",
      websiteLink: "https://fairmont-grand.vercel.app",
    },
  ];

  return (
    <div className="Projects" id="Projects">
      <div className="heading">
        <h2>* Projects</h2>
      </div>

      {ProjectInfo.map((project, i) => (
        <div className="gallery" key={project.url}>
          <Gallery
            image={project.image}
            para={project.para}
            title={project.title}
            url={project.url}
            index={i}
            code={project.code}
            websiteLink={project.websiteLink}
          />
        </div>
      ))}
      {}
    </div>
  );
}
