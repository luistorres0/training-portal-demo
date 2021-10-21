import React from "react";
import "./RepairsView.css";

import NavBar from "../Common/NavBar";

function RepairsView() {
  return (
    <div className="repairs-view">
      <NavBar />
      <h1>Repairs Training</h1>
      <hr />
      <main>
        <div className="video-link-container">
          <a href="https://www.youtube.com/watch?v=O2ba-t_N1gE" target="_blank" rel="noreferrer">
            Module 1
          </a>
        </div>
        <div className="video-link-container">
          <a href="https://www.youtube.com/watch?v=HvTRp1LbHGo" target="_blank" rel="noreferrer">
            Module 2
          </a>
        </div>
        <div className="video-link-container">
          <a href="https://www.youtube.com/watch?v=s8O38YMI0QE" target="_blank" rel="noreferrer">
            Module 3
          </a>
        </div>
      </main>
    </div>
  );
}

export default RepairsView;
