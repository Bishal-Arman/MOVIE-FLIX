import bgVideo from "../../../assets/bannerVideo/video.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="background-video">
      <div className="overlay"></div>
      <video src={bgVideo} autoPlay muted className="video-element"></video>
      <div className="content">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-4xl  font-thin "
        >
          Go ahead, stream free
        </h1>
        <p
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mt-4 font-sans"
        >
          With MOVIE<span className="text-green-400">~</span>FLIX you can watch
          free movies and shows, plus <br /> Live TV on almost any device. What
          are you waiting for?
        </p>
      </div>
    </div>
  );
};

export default Banner;
