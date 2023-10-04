import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import anime from "animejs";
import "./salutationStyles.scss";
const CustomCard = () => {
  const navigate = useNavigate();
  const [welcomeText, setWelcomeText] = useState("Welcome to ACCESS DENIED");
  const welcomeTextRef = useRef(null);
  const timelineRef = useRef(null);

  // react hook
  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeInOutSine",
    });
    const welcomeElement = welcomeTextRef.current;

    // to open the box wide
    tl.add({
      targets: welcomeElement,
      width: ["0%", "60%"],
      direction: "forward",
      delay: 100,
      duration: 400,
      easing: "easeInOutSine",
    });

    // to open eyes - for text 1
    tl.add({
      targets: welcomeElement,
      height: ["0%", "40%"],
      direction: "forward",
      delay: 3,
      duration: 400,
      easing: "easeInOutSine",
    });

    // close eyes - transition to text 2
    tl.add({
      targets: welcomeElement,
      height: ["40%", "0%"],
      direction: "reverse",
      delay: 3000,
      duration: 300,
      easing: "easeInOutSine",
    });

    // open eyes - text 2
    tl.add({
      targets: welcomeElement,
      height: ["0%", "40%"],
      direction: "forward",
      delay: 3,
      duration: 300,
      easing: "easeInOutSine",
      update: function () {
        setWelcomeText(
          "You are invited to follow the stories of a few characters"
        );
      },
    });
    // close eyes - text 2
    tl.add({
      targets: welcomeElement,
      height: ["40%", "0%"],
      direction: "reverse",
      delay: 3000,
      duration: 300,
      easing: "easeInOutSine",
    });

    // open eyes - text 3
    tl.add({
      targets: welcomeElement,
      height: ["0%", "40%"],
      direction: "forward",
      delay: 3,
      duration: 300,
      easing: "easeInOutSine",
      update: function () {
        setWelcomeText(
          "Your decisions and choices will effect their lives. CHOOSE WISELY!"
        );
      },
    });
    // close eyes - text 3
    tl.add({
      targets: welcomeElement,
      height: ["40%", "0%"],
      direction: "reverse",
      delay: 3000,
      duration: 300,
      easing: "easeInOutSine",
    });

    // tansition to character page
    tl.add({
      targets: welcomeElement,
      height: ["0vh", "100vh"],
      width: "100%",
      direction: "forward",
      delay: 3,
      duration: 1000,
      backgroundColor: ["#000", "#2C2E39"],
      borderColor: ["#fff", "#2C2E39"],
      easing: "easeInOutSine",
      update: function () {
        setWelcomeText("");
      },
    });

    tl.add({
      targets: welcomeElement,
      height: ["0%", "100%"],
      direction: "forward",
      delay: 3000,
      duration: 300,
      easing: "easeInOutSine",
      update: function () {
        navigate("/characters"); 
      },
    });
    timelineRef.current = tl; // resets the timeline
    timelineRef.current?.play();
    return () => {
      timelineRef.current?.pause();
      timelineRef.current?.seek(0); // timetstamp - 0
    };
  }, []);

  return (
    <Card
      sx={{ // matrial ui styling
        backgroundColor: "black",
        color: "white",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          borderBottom: "2px solid white",
          borderTop: "2px solid white",
          width: "60%",
          height: "auto",
          overflow: "hidden",
        }}
        className="welcome-text-wrap"
        ref={welcomeTextRef}
      >
        <CardContent style={{ paddingTop: "10%" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              fontSize: "48px",
              textTransform: "uppercase",
              fontFamily: "ShadowsIntoLight-Regular",
            }}
            className="welcome-text"
          >
            {welcomeText}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CustomCard;
