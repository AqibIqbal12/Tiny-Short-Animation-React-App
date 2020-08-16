import React, {useRef} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "600px",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      width: "500px",
      height: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "240px",
    },
  },

  image: {
    position: "absolute",
    width: "100%",
    maxWidth: "700px",
    top: "-5%",

    zIndex: 1,
  },
  flicker: {
    position: "absolute",
    width: "100%",
    maxWidth: "700px",
    top: "-5%",
    zIndex: 2,
    opacity: 0,
  },
  brain: {
    position: "absolute",
    width: "100%",
    maxWidth: "700px",
    top: "-5%",
    zIndex: 3,
  },
}));


export const HeaderImage = () => {
  const brainRef = useRef(null);
  const flickerRef = useRef(null);
  const classes = useStyles();

  useWebAnimations({
    ref: brainRef,
    keyframes: [
      {
        transform: "translateY(10px) scale(0.85)",
      },
      {
        transform: "translateY(-30px) scale(1)",
      },
    ],
    timing: {
      duration: 3000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  useWebAnimations({
    ref: flickerRef,
    keyframes: [
      {
        opacity: 0,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0.1,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0.3,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0.5,
      },
    ],
    timing: {
      duration: 500,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div className={classes.container}>
        <img
          className={classes.image}
          src="Images/Intro_Featured_Image_Empty.svg"
          alt="background"
        />
        <img
          className={classes.flicker}
          ref={flickerRef}
          src="Images/Intro_Front_Layer.svg"
          alt="flicker"
        />
        <img
          className={classes.brain}
          ref={brainRef}
          src="Images/Intro_Brain.svg"
          alt="brain"
        />
      </div>
    </div>
  );
}
