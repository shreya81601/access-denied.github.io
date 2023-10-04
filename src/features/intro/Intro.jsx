import React, { useEffect, useRef } from "react";
import { Box, Container, Grid, Typography, colors } from "@mui/material";
import CustomButton from "../../components/button/CustomButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./accessDeniedstyles.scss";
import anime from "animejs";
import { NavLink } from "react-router-dom";
const Intro = (props) => {
  const accessTextRef = useRef(null);
  const introTextRef = useRef(null);
  const timelineRef = useRef(null);
  const continueBtnRef = useRef(null);
  const introText = `"If you have the privilege to study,* study for all those who cannot."`;
  const introPageSkipButtonText = "Skip";
  const introPageTextButton = "Click to Continue";
  const text1 = "Access";
  const text2 = "Denied";
  const generateTitle = (text = "", extraClassName = "", delimitation = "", refEle=null) => {
    return text?.split(delimitation).map((letter, index) => {
      return (
          <span
          key={letter + index}
            className={`${extraClassName} ${letter + index}`}
            ref={refEle}
            data-text={letter}
            style={{ display: "inline-block" }}
          >
            {letter}
          </span>
      );
    });
  };

  useEffect(() => {
    const accessTextEl = accessTextRef;
    const introTextEl = introTextRef;
    const continueRefEl = continueBtnRef;
    console.log(continueRefEl.current,'continueRefEl')
    const animationObj = {
      opacity: [0, 1],
      direction: "forwards",
      duration: 800,
      delay: anime.stagger(350),
      rotateY: [90,0], // for access denied text
      easing: "easeInOutSine",
    }
    const tl = anime.timeline({
      loop: false,
    });
   
      tl.add({
        targets: accessTextEl.current?.children,
        ...animationObj
      });

      tl.add({
        targets: accessTextEl.current?.children,
        opacity: [1,0],
        direction: "forwards",
        delay: anime.stagger(250),
        duration: 1500,
        translateY: [0,-100], // access denied text transition 2, going up
        easing: "easeInOutSine",
        scale:[1,0],
      });
  

    tl.add({
      targets: introTextEl.current?.children,
      opacity: [0, 1],
       delay: anime.stagger(350), // doesnt work --> check
      duration: 2000, // Animation duration in milliseconds
      easing: "easeOutQuad", //
      direction: "forwards",
   
    });
    tl.add({
      targets: continueRefEl.current?.children,
      opacity: [0, 1],
       delay: anime.stagger(350), // doesnt work --> check
      duration: 2000, // Animation duration in milliseconds
      easing: "easeOutQuad", //
      direction: "alternate",
   
    });
  timelineRef.current = tl;
  timelineRef.current.play();
    return ()=>{
     timelineRef.current.pause();
     timelineRef.current.seek(0);

    }
  }, []);

  return (
    <>
      <NavLink to={"/salutation"}>
        <CustomButton
          variant="text"
          endIcon={<ArrowForwardIosIcon />}
          style={{
            position: "absolute",
            right: 0,
            top: "10px",
            color: "grey",
            fontSize: "16px",
            marginRight: "2%",
          }}
          disableRipple
        >
          {introPageSkipButtonText}
        </CustomButton>
      </NavLink>
      <div className="center">
        <div
          ref={accessTextRef}
          style={{ position: "absolute", margin: "0 auto" }} // inline style
        >
          {generateTitle(text1, "access-denied access-text letter", "")}
          {generateTitle(text2, "access-denied denied-text letter", "")}
        </div>
        <div className="intro-wrap" ref={introTextRef}>
          <div className="center" style={{ flexDirection: "column" }}>
            <div className="center" style={{ flexDirection: "column" }}>
              {generateTitle(introText, "intro-text", "*")}
            </div>
            <div style={{ position: "absolute", bottom: "20%" }}>
              <NavLink to={"/salutation"} ref={continueBtnRef}>
                <CustomButton
                  variant="text"
                  style={{ fontSize: "16px", color: "grey" }}
                  disableRipple
                  endIcon={
                    <div style={{ fontSize: "16px" }}>
                      <ArrowForwardIosIcon /> <ArrowForwardIosIcon />
                    </div>
                  }
                >
                  {introPageTextButton}
                </CustomButton>
              </NavLink>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
