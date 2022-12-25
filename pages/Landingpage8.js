import React from "react";
import style from "../styles/Landingpage8.module.css";
function Landingpage8() {
  return (
    <div className={style.parent}>
      <div className="h-100">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_SkhtL8.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>

      <div className={style.textpart}>
        <h1 className={style.textparth1}>DEMO</h1>
        <h3 className={style.textparth3}>Landing Page</h3>
        <button className="btn btn-danger">Get Started</button>
      </div>
    </div>
  );
}

export default Landingpage8;
