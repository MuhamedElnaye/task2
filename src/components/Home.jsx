import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container">
      <div className="logo">My Profile</div>
      <div className="landing">
        <button type="submit" onClick={() => setVisible(true)}>
          <img src="/images/them.jpg" alt="them" />
        </button>
        <div className="Proimg">
          <div className="show">
            <img src="/images/show.jpg" alt="" />
          </div>
          <div></div>
          <div className="name">Rayan Sharif </div>
        </div>
      </div>
      <nav>
        <ul>
          <li className="active">
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Stores</Link>
          </li>
          <li>
            <Link to={"/"}>Products</Link>
          </li>
          <li>
            <Link to={"/"}>Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="discription">
        <div className=" discheader">
          <div className="">
            <span>
              <img src="/images/desc.jpg" alt="discription" />
            </span>
            <span>Discription</span>
          </div>
          <div className="">
            <span>Edit</span>
            <span>
              <img src="/images/edit.png" alt="edit" />
            </span>
          </div>
        </div>
        <p>
          Simplify interface and experiance odio, non enim repellendus soluta
          distinctio atque tempore officiis architecto? Id quaerat sit hic
          saepe. Blanditiis suscipit pariatur consectetur tempore officiis? Vel
          magnam,
        </p>
        <div className=" discheader">
          <div className="">
            <span>
              <img src="/images/hear.png" alt="them" />
            </span>
            <span> Favorite Content</span>
          </div>
          <div className="">
            <span>Edit</span>
            <span>
              <img src="/images/edit.png" alt="edit" />
            </span>
          </div>
        </div>
        <div className="skills">
          <div>UI Design</div>
          <div>UX Design</div>
          <div>web Design</div>
          <div>APP</div>
          <div>User interFace</div>
          <div>User Experiance</div>
          <div>Prototype</div>
        </div>
        <div className="notifcation">
          <div className="discheader">
            <div>
              <span>
                <img src="/images/notif.png" alt="notifcation" />
              </span>
              <span>Notifications</span>
            </div>
          </div>
          <div className="pops">
            <span>
              <img src="/images/rigth.png" alt="them" />
            </span>
            <p>There are No Notifcations About Yur Account</p>
          </div>
        </div>
      </div>
      {/* {visible ? <Theme /> : setVisible(false)} */}
      {visible && (
        <div className="theme">
          <div className="container">
            {/* <button className="close" onClick={() => setVisible(false)}>
              X
            </button> */}
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
      )}
    </div>
  );
};

export default Home;
