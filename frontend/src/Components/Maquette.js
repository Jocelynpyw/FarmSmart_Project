import React from "react";
import "../Styles/Maquette.css";

function Maquette() {
  return (
    <>
      <div className="maquette">
        <div className="maquette-box">
          <div className="maquette-box-left">
            <div className="top">
              <div className="square square-blue"></div>
              <div className="square square-green"></div>
              <div className="square square-yellow"></div>
              <div className="square square-red"></div>
            </div>
            <div className="bottom">
              <div className="barre">
                <div className="barre-box barre-box1"></div>
                <div className="barre-color square-green"></div>
              </div>
              <div className="barre">
                <div className="barre-box barre-box2"></div>
                <div className="barre-color square-red"></div>
              </div>
              <div className="barre">
                <div className="barre-box barre-box3"></div>
                <div className="barre-color square-yellow"></div>
              </div>
              <div className="barre">
                <div className="barre-box barre-box4"></div>
                <div className="barre-color square-green"></div>
              </div>
              <div className="barre">
                <div className="barre-box barre-box5"></div>
                <div className="barre-color square-red"></div>
              </div>
              <div className="barre">
                <div className="barre-box barre-box6"></div>
                <div className="barre-color square-green"></div>
              </div>
            </div>
          </div>
          {/* <!-- la petite partie a droite --> */}
          <div className="maquette-box-right">
            <div className="block11"></div>
            <div className="circle"></div>
            <div className="block12"></div>
            <div className="box-barre">
              <div className="barre-box-right"></div>
              <div className="barre-box-right" style={{ width: "40px" }}></div>
              <div className="barre-box-right" style={{ width: "45px" }}></div>
              <div className="barre-box-right" style={{ width: "30px" }}></div>
            </div>
            <div className="box-barre" style={{ marginTop: "10px" }}>
              <div className="barre-box-right"></div>
              <div className="barre-box-right" style={{ width: "40px" }}></div>
              <div className="barre-box-right" style={{ width: "20px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maquette;
