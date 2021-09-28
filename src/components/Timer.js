import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const timerSize = (a) => `${410 - a}px`;
const timerSize2 = (a) => `
    width: ${410 - a}px};
    height: ${410 - a}px};
`;

const Container = styled.div`
  position: relative;
  ${timerSize2(0)};

  border-radius: 50%;
  background: green;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
  margin: 48px auto;
  margin-bottom: 0;
  z-index: -1;

  @media (max-width: 450px) {
    width: ${timerSize(110)};
    height: ${timerSize(110)};
  }
`;

const TimerInner = styled.div`
  ${timerSize2(44)};

  border-radius: 50%;
  background-color: #161932;
  position: absolute;
  top: 22px;
  left: 22px;

  @media (max-width: 450px) {
    width: ${timerSize(154)};
    height: ${timerSize(154)};
  }
`;

const CustomProgressBar = styled(CircularProgressbar)`
  margin: 13px;
  ${timerSize2(71)};
  font-weight: bold;

  @media (max-width: 450px) {
    width: ${timerSize(182)};
    height: ${timerSize(182)};
  }
`;

const TimerButton = styled.button`
  position: absolute;
  top: 65%;
  left: 35%;

  background-color: transparent;
  border: none;

  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  /* identical to box height */
  text-align: center;
  letter-spacing: 15px;

  color: #d7e0ff;

  @media (max-width: 450px) {
    top: 65%;
    left: 31%;
    font-size: 14px;
    line-height: 21px;

    /* identical to box height */
    letter-spacing: 13.125px;
  }
`;

const Timer = () => {
  const percentage = 99;
  return (
    <Container>
      <TimerInner>
        <CustomProgressBar
          strokeWidth={3}
          styles={buildStyles({
            pathColor: "#F87070",
            trailColor: "transparent",
            textSize: "30px",
            textColor: "#d7e0ff",
          })}
          value={percentage}
          text={`25:00`}
        />
        <TimerButton>start</TimerButton>
      </TimerInner>
    </Container>
  );
};

export default Timer;
