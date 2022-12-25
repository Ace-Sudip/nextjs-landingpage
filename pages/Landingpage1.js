import React from "react";
import { Parallax, Background } from "react-parallax";

function Landingpage1() {
  return (
    <>
      <div>
        <Parallax strength={500}>
          <Background>
            <img className="parallaximg1" src="/rain.jpg" alt="parallaxbg" />
          </Background>
          <div className="parallax-content flex-with-center ">
            <div className="text-center" data-aos="fade-right">
              <h1>Demo</h1>
              <div className="intro-content justify-content-center d-flex">
                <p className="firsttitle1">&nbsp;Landing Page&nbsp;</p>
              </div>
              <a href="#bottom">
                <button className="btn btn-info text-white mt-1 ">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="bg-info">
        <div className="min-vh-100">
          <h3
            style={{ height: "80vh" }}
            id="bottom"
            className="justify-content-center text-white d-flex align-items-center"
          >
            Thanks For Visting
          </h3>
        </div>
      </div>
    </>
  );
}

export default Landingpage1;
