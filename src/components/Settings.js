import React from "react";
import styled from "styled-components";

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
  z-index: 50;
  width: 540px;
  height: 464px;
  left: 50%;
  margin-top: 120px; /* Negative half of height. */
  margin-left: -270px;
  background-color: white;
`;

const Settings = ({ visibility }) => {
  return (
    <Background hidden={visibility}>
      <SettingsContainer></SettingsContainer>
    </Background>
  );
};

export default Settings;
