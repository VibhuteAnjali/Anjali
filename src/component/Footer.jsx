import "../styles/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="flex-footer">
        <div>
          <div className="logo">
            <p>Anjali.</p>
          </div>
          <div className="socialMedia">
            <a href="https://github.com/VibhuteAnjali" target="_blank">
              <img
                src="https://img.icons8.com/?size=30&id=12599&format=png&color=FFFFFF"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-vibhute-55b590264/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/?size=30&id=8808&format=png&color=FFFFFF"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="#About">About</a>
        </div>
        <div className="links contact">
          <a href="#Projects">Projects</a>
          <a
            href="mailto:anjali.vibhute2002@gmail.com?subject=Hello&body=Hi Anjali,"
            className="contact"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/?size=35&id=pBIeObS8d0aU&format=png&color=FFFFFF"
              alt="email"
            />
            anjali.vibhute2002@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
