import React from "react";
import "./CustomerServiceView.css";

import NavBar from "../Common/NavBar";

function CustomerServiceView() {
  return (
    <div className="customer-service-view">
      <NavBar />
      <h1>Customer Service Training</h1>
      <hr />
      <main>
        <div className="video-link-container">
          <a href="https://www.youtube.com/watch?v=tlNK3eJvsz0" target="_blank" rel="noreferrer">
            Module 1
          </a>
        </div>
        <div className="video-link-container">
          <a href="https://www.youtube.com/watch?v=kx7-S9jvVXM" target="_blank" rel="noreferrer">
            Module 2
          </a>
        </div>
        <div className="video-link-container">
          <a href="https://www.youtube.com/watch?v=tb2rv77YO-w" target="_blank" rel="noreferrer">
            Module 3
          </a>
        </div>
      </main>
    </div>
  );
}

export default CustomerServiceView;
