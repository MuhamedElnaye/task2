import React, { useState } from "react";
import "./Theme.css";
const Theme = () => {
  const [visible, setVisible] = useState("block");
  return (
    <div className="theme" style={{ display: `${visible}` }}>
      <div className="container">
        <button className="close" onClick={() => setVisible("none")}>
          X
        </button>
        <div className="selecttheme">
          <p>Select Theme</p>
          <div className="themecolors">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="selectavatar">
          <p>Select Avatar</p>
          <div className="themeavater">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
