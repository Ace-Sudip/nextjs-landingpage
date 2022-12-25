import style from "../styles/Landingpage4.module.css";
import AnimatedShapes from "../Components/AnimatedShapes";

const Landingpage4 = () => {
  return (
    <>
      <div className={style.container}>
        <AnimatedShapes />
        <div className={`${style.circle} ${style.circle2}`} />
        <div className={style.card}>
          <h1 className={style.title}>
            <span className={style.brandName}>Demo</span> Landing Page
          </h1>
          <p className={style.desc} data-aos="fade-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className={style.button}>DISCOVER</button>
        </div>
        <div className={style.card}>
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_rUsTCATHgu.json"
            background="transparent"
            speed="1"
            style={{ width: "350px", height: "350px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
};

export default Landingpage4;
