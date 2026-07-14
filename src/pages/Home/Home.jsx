import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero_banner from "../../assets/hero_banner.jpg";
import Hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="Hero">
        <img src={Hero_banner} alt="Hero Banner" className="banner-img" />
        <div className="Hero-caption">
          <img src={Hero_title} alt="Hero Title" className="caption-img" />
          <p>
            "Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy"
          </p>
          <div className="Hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Play" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Topics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
