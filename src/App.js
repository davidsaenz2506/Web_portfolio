import "./styles/App.css";
import experienceCompontent from "./pictures/experience.jpg";
import userLogo from "./pictures/Web developer.png";
import echoSys from "./pictures/echosystem.png";
import frontEcho from "./pictures/echosystemFrond.png";
import React from "react";
import sendButton from "./pictures/gmail.png";

import Instagram from "./pictures/instagram.png";
import Linkedin from "./pictures/linkedin.png";
import Whatsapp from "./pictures/whatsapp.png";

function App() {
  const [hideText, setHideText] = React.useState(true);
  const [hideImage, setHieImage] = React.useState(true);
  const [hideCode, setHideCode] = React.useState(true);
  const [renderImage, setRenderImage] = React.useState(frontEcho);

  setTimeout(() => {
    setHideText(false);
    setHieImage(false);
  }, 1000);

  setTimeout(() => {
    setHideCode(false);
  }, 2000);

  function handleHoverPicture() {
    setTimeout(() => {
      setRenderImage(echoSys);
    }, 100);
  }

  function handleHoverPictureOut() {
    setTimeout(() => {
      setRenderImage(frontEcho);
    }, 100);
  }

  return (
    <div className="App">
      <div className="Header">
        <div className="HeaderText">
          <div className="SubHeaderText">
            <p className="tipyngTextParent" style={{ marginBottom: "-40px" }}>
              Hi, i'm{" "}
              <span className="tipyngText">
                David Saenz<span>&#160;</span>
              </span>
            </p>

            <p
              className="localText"
              style={{ color: hideText ? "transparent" : "white" }}
            >
              Fullstack software developer
            </p>
            <p
              className="localTextChild"
              style={{
                fontSize: "28px",
                marginTop: "-50px",
                color: hideText ? "transparent" : "white",
              }}
            >
              and web programmer
            </p>

            <p
              className={hideCode ? "hiddenTextCode" : "tipyngTextParentCode"}
              style={{ marginBottom: "-40px" }}
            >
              <span style={{ color: "#d15565" }}>console</span>
              <span style={{ color: "#2b95c8" }}>.log</span>
              <span style={{ color: "#724f82" }}>(</span>
              <span style={{ color: "#48b35c" }}>
                "Welcome to my web site!"
              </span>
              <span style={{ color: "#724f82" }}>);</span>{" "}
              <span class="cursor">|</span>
            </p>
          </div>
        </div>
      </div>
      <div className="parentInfo">
        <div className="childInfo" style={{ marginRight: "90px" }}>
          <h1 className={hideText ? "hiddenTexts" : "aboutUs"}>
            It's a pleasure to meet you
          </h1>
          <p className={hideText ? "hiddenTexts" : "aboutInfo"}>
            I will tell you a little about me, I am a fullstack software
            developer with a year of experience in the sector, my passion for
            Learning new things has allowed me to excel in the companies in
            which I have worked as a developer, I have managed to improve My
            programming and design skills, so I have been able to create and
            maintain scalable and clean software.
          </p>
        </div>
        <div className="pictures">
          <img
            className={hideImage ? "hiddenImage" : "myImage"}
            src={userLogo}
          />
        </div>
      </div>
      <div className="secondParentInfo">
        <div
          className="secondChildInfo"
          style={{
            backgroundColor: hideText ? "transparent" : "#182433",
            zIndex: "2",
          }}
        >
          <h1 className={hideText ? "hiddenTexts" : "aboutInfo"}>My skills</h1>
          <p className={hideText ? "hiddenTexts" : "aboutInfo"}>
            Learning fast, applying knowledge in the development environment and
            working in a team are my main soft skills, in terms of my strong
            skills, I manage Frontend and backend development using{" "}
            <span className={hideText ? "hiddenTexts" : "frontTech"}>Html</span>
            ,{" "}
            <span className={hideText ? "hiddenTexts" : "frontTech"}> Css</span>
            ,
            <span className={hideText ? "hiddenTexts" : "frontTech"}>
              {" "}
              Javascript
            </span>
            , and{" "}
            <span className={hideText ? "hiddenTexts" : "frontTech"}>
              {" "}
              Typescript
            </span>
            , in terms of libraries for Front development I use{" "}
            <span className={hideText ? "hiddenTexts" : "frontTech"}>
              {" "}
              ReactJS
            </span>
            ,{" "}
            <span className={hideText ? "hiddenTexts" : "frontTech"}>
              {" "}
              NextJS
            </span>
            ,{" "}
            <span className={hideText ? "hiddenTexts" : "frontTech"}>
              {" "}
              Material UI
            </span>
            ,{" "}
            <span className={hideText ? "hiddenTexts" : "frontTech"}>
              {" "}
              Bootstrap
            </span>
            ,{" "}
            <span className={hideText ? "hiddenTexts" : "frontTech"}>
              {" "}
              Chackra UI
            </span>{" "}
            and{" "}
            <span className={hideText ? "hiddenTexts" : "frontTech"}>
              {" "}
              Zustand
            </span>{" "}
            for the management of global states, and in the Backend I use{" "}
            <span className={hideText ? "hiddenTexts" : "backTech"}>
              {" "}
              Typescript
            </span>
            ,{" "}
            <span className={hideText ? "hiddenTexts" : "backTech"}>
              {" "}
              NodeJS
            </span>
            ,{" "}
            <span className={hideText ? "hiddenTexts" : "backTech"}>
              {" "}
              NestJS
            </span>{" "}
            mainly, and I have knowledge in non-relational databases (
            <span className={hideText ? "hiddenTexts" : "backTech"}>
              especially MongoDB
            </span>
            ), I have developed Rest API and authentication systems, CRUD among
            others, which has allowed me to improve my skills in the backend
            environment, I am currently learning{" "}
            <span className={hideText ? "hiddenTexts" : "backTech"}>
              .NET from C#
            </span>
          </p>
        </div>
        <div className="echosystemPicture">
          <img
            onMouseEnter={handleHoverPicture}
            onMouseOut={handleHoverPictureOut}
            className={hideImage ? "hiddenImage" : "frameWorksImage"}
            src={renderImage}
          />
        </div>
      </div>

      <div className="thirdParentInfo">
        <div
          className="thirdChildInfo"
          style={{
            backgroundColor: hideText ? "transparent" : "#182433",
            zIndex: "2",
          }}
        >
          <h1 className={hideText ? "hiddenTexts" : "aboutInfo"}>
            My experience
          </h1>
          <p className={hideText ? "hiddenTexts" : "aboutInfo"}>
            I have been working in the software development sector in Frontend
            and Backend roles for about a year, my experience is as follows:
            <br />
            <div className="workingCard">
              <p className="experienceTrack">
                <p style={{ color: "#182433" }}>
                  {" "}
                  Trackland <br />
                </p>
                <p style={{ color: "#182433" }}>
                  Salt Lake City, Utah, United States <br />
                </p>
                <p style={{ color: "#3f3844" }}>
                  Role: Frontend Developer <br />{" "}
                </p>
                <p style={{ color: "#3f3844" }}>
                  {" "}
                  Responsibilities: Develop frontend functionalities for a CRM
                  system that implements Salesforce in a spreadsheet, in such a
                  way that the movement of data will be more versatile, my main
                  function was to renew the old grid for a new one, also to
                  totally improve the software old and implement new
                  functionality together with Backend developers
                </p>
              </p>
            </div>
            <div className="workingCard" style={{ marginBottom: "60px" }}>
              <p className="experienceTrack">
                <p style={{ color: "#182433" }}>
                  {" "}
                  Stefanini LATAM <br />
                </p>
                <p style={{ color: "#182433" }}>
                  Chile <br />
                </p>
                <p style={{ color: "#3f3844" }}>
                  Role: Fullstack developer <br />{" "}
                </p>
                <p style={{ color: "#3f3844" }}>
                  {" "}
                  Create scalable services in NestJS and NodeJS, manage
                  databases in MongoDB, carry out tests in Backend of the
                  software to be treated, develop new functionalities in Front
                  using React and Next.
                </p>
              </p>
            </div>
          </p>
        </div>
        <div className="experiencePicture">
          <img
            onMouseEnter={handleHoverPicture}
            onMouseOut={handleHoverPictureOut}
            className={hideImage ? "hiddenImage" : "experienceImage"}
            src={experienceCompontent}
          />
        </div>
      </div>
      <div className="footer">
        <div className="myContact">
          <h1 style={{ color: "white", textAlign: "center" }}>
            This is my Gmail Contact{" "}
          </h1>
          <form
            action="https://formsubmit.co/davidsaenz976@gmail.com"
            method="POST"
          >
            <div class="elem-group">
              {" "}
              <label for="name">Name</label>{" "}
              <input
                type="text"
                name="name"
                placeholder="Your name here"
                pattern="[A-Z\sa-z]{3,20}"
                required
              />{" "}
            </div>
            <div class="elem-group">
              {" "}
              <label for="email">Email address</label>{" "}
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
              />{" "}
            </div>
            <div class="elem-group">
              {" "}
              <label for="title">Subject</label>{" "}
              <input
                type="text"
                name="subject"
                required
                placeholder="Write your subject here"
                pattern="[A-Za-z0-9\s]{8,60}"
              />{" "}
            </div>

            <div class="elem-group">
              {" "}
              <label for="title">Content</label>
              <textarea name="comments" cols="15" rows="5"></textarea>
            </div>

            <button type="submit">
              <img src={sendButton} />
              <p>Send email</p>
            </button>
          </form>
        </div>
        <div className="moreAbout">
          <div className="thanksOut">
            <h1 style={{ color: "white", fontSize: "60px" }}>
              Thank you for visiting my website!
            </h1>
            <h3
              style={{ color: "white", fontSize: "30px", marginTop: "-10px" }}
            >
              If you wish to contact me, you can do so through this form, just
              enter your information and I will contact you with you as soon as
              possible, have a great day
            </h3>
          </div>
          <div className="socialImages">
            <h1 style={{ color: "white", fontSize: "40px" }}>Social media:</h1>
            <div className="contact_img">
              <div class="linkedin" style={{ marginRight: "30px" }}>
                <img
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/david-saenz-var%C3%B3n-88b863250/"
                    );
                  }}
                  class="react"
                  src={Linkedin}
                  alt="Me"
                />
              </div>
              <div class="whatsapp">
                <img
                  onClick={() => {
                    window.open("https://wa.me/573043038866");
                  }}
                  class="react"
                  src={Whatsapp}
                  alt="Me"
                />
              </div>
              <div class="instagram">
                <img
                  onClick={() => {
                    window.open("https://www.instagram.com/hdsenkk/");
                  }}
                  class="react"
                  src={Instagram}
                  alt="Me"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
