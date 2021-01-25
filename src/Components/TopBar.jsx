import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";

const rainbow = (start) => keyframes`
      from{
          filter: hue-rotate(${start}deg)
      }
      to{
          filter: hue-rotate(${start + 360}deg)
      }
  `;

const RainbowText = styled.span`
  color: #1eff00;
  font-size: 1.5rem;
  font-weight: bold;
  animation: ${(props) => rainbow(props.startingHueDegree)} 3s linear infinite;

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;


const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main},  ${theme.palette.primary.dark})`,
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.12)",
    },
}));


export const TopBar = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div>
                {"Tiny Animation Project".split("").map((char, index) => (
                    <RainbowText key={index} startingHueDegree={index * 25}>
                        {char}
                    </RainbowText>
                ))}
            </div>
        </div>
    )
}
