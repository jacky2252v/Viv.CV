import "./language.css";
import { MdHtml } from "react-icons/md";
import { BsFiletypeCss } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Language() {
  return (
    <div className="lang">
      <h1>Technologies</h1>
      <div className="imgs">
        <div className="img1">
          <div className="img">
            <IconContext.Provider value={{ color: "#F06529", size: "100px" }}>
              <div>
                <MdHtml />
              </div>
            </IconContext.Provider>
          </div>
          <div className="img">
            <IconContext.Provider value={{ color: "#264de4", size: "100px" }}>
              <div>
                <BsFiletypeCss />
              </div>
            </IconContext.Provider>
          </div>
        </div>

        <div className="img1">
          <div className="img">
            <IconContext.Provider value={{ color: "#553C7B", size: "100px" }}>
              <div>
                <FaBootstrap />
              </div>
            </IconContext.Provider>
          </div>
          <div className="img">
            <IconContext.Provider value={{ color: "#61DBFB", size: "100px" }}>
              <div>
                <FaReact />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
