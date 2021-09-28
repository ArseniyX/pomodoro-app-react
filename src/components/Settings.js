import React from "react";
import styled from "styled-components";
import iconClose from "../assets/icon-close.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import AcceptButton from "./AcceptButton";
import SelectFontOrColor from "./SelectFontOrColor";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SettingsContainer = styled.div`
  position: fixed;
  width: 540px;
  left: 50%;
  top: 50%;
  margin-top: -215px; /* Negative half of height. */
  margin-left: -270px;
  background-color: #fff;
  border-radius: 25px;
`;

const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e3e1e1;
`;

const SettingsTitle = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  margin: 0;
  /* identical to box height */

  color: #161932;
`;

const CloseIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: auto 0;
`;

const SetTime = styled.div`
  margin: 24px 40px;
  text-align: left;
`;

const SetTimeTitle = styled.h2`
  font-size: 13px;
  padding-top: 2px;
  line-height: 16px;
  letter-spacing: 5px;

  color: #161932;
`;

const SetTimeInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const SetTimeBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SetTimeLabel = styled.label`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  width: 150px;

  /* identical to box height */

  color: #1e213f;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const ArrowsBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 29px;
  right: 10px;
  margin-bottom: 9px;
`;

const ArrowImg = styled.img`
  opacity: 0.25;
  padding: 0px;
  width: 15px;

  &:hover {
    opacity: 0.7;
  }
`;

const ArrowButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

const SetTimeInput = styled.input`
  border: none;
  background: #eff1fa;
  border-radius: 10px;
  padding: 15px;
  width: 148px;
  margin-top: 7px;

  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  color: #1e213f;

  &:hover + ${ArrowsBlock} > ${ArrowButton} > ${ArrowImg} {
    /* change opacity of arrows to opacity: 0.7; */
    opacity: 0.7;
  }
`;

const SelectContainer = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e3e1e1;
`;

const SelectElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const FontRadioBtn = styled.input`
  position: absolute;
  visibility: hidden;
`;

const SelectFontLabel = styled.label`
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 10px;

  /* height: 48px; */

  background-color: #161932;
`;

const SelectColorLabel = styled.label`
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 9px 14px;
  background-color: #f87070;
`;

const Settings = ({ visibility }) => {
  return (
    <Background hidden={visibility}>
      <SettingsContainer>
        <SettingsHeader>
          <SettingsTitle>Settings</SettingsTitle>
          <CloseIcon src={iconClose} alt={"clone"} />
        </SettingsHeader>
        <SetTime>
          <SetTimeTitle>TIME (MINUTES)</SetTimeTitle>
          <SetTimeInner>
            <SetTimeBlock>
              <SetTimeLabel>
                pomodoro
                <SetTimeInput type="number" />
              </SetTimeLabel>
              <ArrowsBlock>
                <ArrowButton>
                  <ArrowImg src={arrowUp} alt="up button" />
                </ArrowButton>
                <ArrowButton>
                  <ArrowImg src={arrowDown} alt="down button" />
                </ArrowButton>
              </ArrowsBlock>
            </SetTimeBlock>
            <SetTimeBlock>
              <SetTimeLabel>
                short break
                <SetTimeInput type="number" />
              </SetTimeLabel>
              <ArrowsBlock>
                <ArrowButton>
                  <ArrowImg src={arrowUp} alt="up button" />
                </ArrowButton>
                <ArrowButton>
                  <ArrowImg src={arrowDown} alt="down button" />
                </ArrowButton>
              </ArrowsBlock>
            </SetTimeBlock>
            <SetTimeBlock>
              <SetTimeLabel>
                long break
                <SetTimeInput type="number" />
              </SetTimeLabel>
              <ArrowsBlock>
                <ArrowButton>
                  <ArrowImg src={arrowUp} alt="up button" />
                </ArrowButton>
                <ArrowButton>
                  <ArrowImg src={arrowDown} alt="down button" />
                </ArrowButton>
              </ArrowsBlock>
            </SetTimeBlock>
          </SetTimeInner>
          <SelectFontOrColor name="FONTS"/>
          <SelectFontOrColor name="COLORS" isFont={false}/>
        </SetTime>
        <AcceptButton/>
      </SettingsContainer>
    </Background>
  );
};

export default Settings;
