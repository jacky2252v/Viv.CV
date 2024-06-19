import "./navbar.css";
import { IconContext } from "react-icons/lib";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { SiVectorlogozone } from "react-icons/si";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <IconContext.Provider value={{ color: "white", size: "50px" }}>
          <div>
            <SiVectorlogozone />
          </div>
        </IconContext.Provider>
      </div>
      <div className="icons">
        <div className="icon">
          <IconContext.Provider value={{ color: "white", size: "40px" }}>
            <div>
              <a href="https://www.instagram.com/0o__vivek.b__o0/">
                <CiInstagram />
              </a>
            </div>
          </IconContext.Provider>
        </div>
        <div className="icon">
          <IconContext.Provider value={{ color: "white", size: "40px" }}>
            <div>
              <a href="https://www.facebook.com/vivek.baraiya.908132?mibextid=ZbWKwL">
                <CiFacebook />
              </a>
            </div>
          </IconContext.Provider>
        </div>
        <div className="icon">
          <IconContext.Provider value={{ color: "white", size: "40px" }}>
            <div>
              <a href="https://www.linkedin.com/in/vivek-baraiya-488869190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <CiLinkedin />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
