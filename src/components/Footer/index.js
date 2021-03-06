import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;

// var style = {
//   // borderTop: "1px solid #E7E7E7",
//   // textAlign: "center",
//   // padding: "0",
//   // left: "0",
//   // bottom: "0",
//   // height: "auto",
//   // width: "100%",
//   // position: 'absolute',

// };

const gitStyle = {
  fontSize: "2rem",
};

function Footer() {
  return (
    <footer >
      <p className="footer">
        <a
          style={gitStyle}
          className="btn btn-outline-white btn-social mx-1"
          href="https://github.com/carefree2706"
        >
          <i>{github}</i>
        </a>
      </p>
      <p>Copyright © DW 2021</p>
    </footer>
  );
}

export default Footer;
