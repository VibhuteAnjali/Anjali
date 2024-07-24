import "../styles/Courosel.css";
export default function Courosel() {
  const items = [
    { text: "*HTML" },
    { text: "*CSS" },
    { text: "*JavaScript" },
    { text: "*ReactJs" },
    { text: "*NodeJs" },
    // Duplicates for seamless loop
    { text: "*ExpressJs" },
    { text: "*MongoDB" },
    { text: "*SQL" },
    { text: "*Bootstrap" },
  ];

  const middleIndex = Math.floor(items.length / 2);

  return (
    <div className="carousel">
      <div className="carousel-track">
        {items.map((item, index) => (
          <div
            className={`block ${index === middleIndex ? "glow" : ""}`}
            key={index}
          >
            <div className="ServicesText">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
