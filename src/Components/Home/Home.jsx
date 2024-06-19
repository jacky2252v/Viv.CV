import "./Home.css";
import Image from "../../assets/kevinRushProfile.png";

function Home() {
  return (
    <div className="main-head">
      <div className="head">
        <h1>Vivek Baraiya</h1>
        <h3>Front-End developer</h3>
        <div className="para">
          <p>
            A front-end developer creates the visual and interactive aspects of
            websites and web applications. They use HTML, CSS, and JavaScript to
            design user interfaces, ensuring responsiveness and functionality.
            Their role bridges design and technology, enhancing user experience
            by making web pages intuitive and visually appealing.
          </p>
        </div>
      </div>
      <img src={Image} alt="" />
    </div>
  );
}

export default Home;
