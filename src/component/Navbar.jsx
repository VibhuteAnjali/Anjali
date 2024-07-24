import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <a href="/#About">About</a>
      </div>
      <div>
        <a href="/" className="Logo">
          Anjali.
        </a>
      </div>
      <div>
        <a href="/#Projects">Projects</a>
      </div>
    </div>
  );
}
