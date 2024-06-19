import "./Projects.css";
import Img1 from "../../assets/proj1.png";
import Img2 from "../../assets/proj2.png";
import Img3 from "../../assets/proj3.png";

function Projects() {
  return (
    <div className="proj">
      <h1>Projects</h1>

      <div className="proj1">
        <img src={Img1} alt="" />
        <div className="info">
          <h2>Meta +</h2>
          <p>
            Meta+ is a multifaceted platform offering social networking, gaming,
            and AI-driven services. It enables seamless communication, diverse
            gaming experiences, and personalized user interactions through
            advanced AI, creating an engaging and integrated digital ecosystem.
            <br />
            <br />
            <a href="https://merametaplus.netlify.app/">
              https://merametaplus.netlify.app/
            </a>
          </p>
          <div className="tech">
            <p>MERN</p>
            <p>JavaScript</p>
            <p>ThreeJs</p>
          </div>
        </div>
      </div>

      <div className="proj1">
        <img src={Img2} alt="" />
        <div className="info">
          <h2>EV-olution</h2>
          <p>
            Evolution is a website featuring a dashboard where users can explore
            and learn about electric cars. It provides detailed information,
            comparisons, and insights, helping users make informed decisions
            about electric vehicle options.
            <br />
            <br />
            <a href="https://ev-olution.netlify.app/">
              https://ev-olution.netlify.app/
            </a>
          </p>
          <div className="tech">
            <p>ReactJs</p>
          </div>
        </div>
      </div>

      <div className="proj1">
        <img src={Img3} alt="" />
        <div className="info">
          <h2>CryptoPlace</h2>
          <p>
            CryptoPlace is a website that displays cryptocurrency rankings,
            market prices, and 24-hour low and high prices. It provides
            real-time data and insights to help users track and analyze the
            performance of various cryptocurrencies.
            <br />
            <br />
            <a href="https://cryptoplace3.netlify.app/">
              https://cryptoplace3.netlify.app/
            </a>
          </p>
          <div className="tech">
            <p>ReactJs</p>
            <p>
              <a
                href="https://www.coingecko.com/en/api"
                style={{ color: "white", textDecoration: "none" }}
              >
                CoinGecko
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
