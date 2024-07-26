/* eslint-disable react/prop-types */

import "../styles/Gallery.css";
import { useNavigate } from "react-router-dom";
export default function Gallery({
  image,
  para,
  title,
  url,
  index,
  code,
  websiteLink,
}) {
  const navigate = useNavigate();
  function handleUrl() {
    navigate(`${url}`);
  }
  return (
    <div>
      <div>
        <div className="gallery-container">
          <div className="image">
            <img src={image} onClick={handleUrl} />
          </div>
          <div className="project-info">
            <div className="title-heading">
              <span>{index + 1}. </span>
              {title}
            </div>
            <p>{para}</p>
            <div className="buttonFlex">
              <a href={code} className="codeBtn" target="_blank">
                <img
                  src="https://img.icons8.com/?size=30&id=12599&format=png&color=FFFFFF"
                  alt="code"
                />
                Code
              </a>
              <a
                href={websiteLink}
                className={websiteLink ? "codeBtn" : "disabledBtn codeBtn"}
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/?size=20&id=IvlXyn1yGmDS&format=png&color=FFFFFF"
                  alt="code"
                  className="Nocurve"
                />
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
