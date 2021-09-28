import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const StyledHeader = styled.header``;

const Logo = styled.img``;

const Navigation = styled.div`
  min-width: 327px;
  max-width: 373px;
  height: 63px;
  background: #161932;
  border-radius: 31.5px;
  margin: 47px auto;

  display: flex;
  justify-content: space-evenly;
`;

const Label = styled.label`
  margin: auto;
  color: #1e213f;

  width: 120px;
  /* height: 48px; */
  background: #f87070;
  border-radius: 26.5px;
  padding: 17px 0;
  font-weight: bold;

  @media (max-width: 375px) {
      width: 105px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="alt" />
      <Navigation>
        <Label>pomodoro</Label>
        <Label>short break</Label>
        <Label>long break</Label>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
