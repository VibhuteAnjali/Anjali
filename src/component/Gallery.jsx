/* eslint-disable react/prop-types */

import "../styles/Gallery.css";
import { useNavigate } from "react-router-dom";
export default function Gallery({ image, para, title, url, index, code }) {
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
            <a href={code} className="codeBtn" target="_blank">
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
