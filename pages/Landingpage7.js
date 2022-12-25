import React from "react";
import style from "../styles/Landingpage7.module.css";

function Landingpage7() {
  return (
    <div className={style.rotatedparent}>
      <div className={style.rotatedrow}>
        <div className="row h-100 align-items-center">
          <div className="col-md-6">
            <div className="h-75 p-5">
              <lottie-player
                src="https://assets10.lottiefiles.com/private_files/lf30_eaeadwwn.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-md-6">
            <div className={style.rotatedtextpart}>
              <h1>
                <b>DEMO</b>
              </h1>
              <p className={style.rotatedparentp}>
                <strong>Landing Page</strong>
              </p>
              <button className="btn btn-danger">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage7;
