import { GlobalStyles } from "./components/globalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import Timer from "./components/Timer";
import settingsIcon from "./assets/icon-settings.svg";
import Settings from "./components/Settings";

const Container = styled.div`
  margin: 48px auto;
  width: 100%;

  /* @media (max-width: 768px) {
    margin-top: 80px;
  } */

  @media (max-width: 375px) {
    margin-top: 32px;
  }
`;

const SettingsImg = styled.img`
  margin-top: 63px;
  @media (max-width: 375px) {
    margin-top: 144px;
  }
`;

const SettingsButton = styled.button`
  background-color: transparent;
  border: none;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <>
        <Container>
          <Header />
          <Timer />
          <SettingsButton>
            <SettingsImg src={settingsIcon} alt="settings-icon" />
          </SettingsButton>

          {/* <body>
          pomodoro short break long break start pause restart Settings Time
          (minutes) pomodoro short break long break Font Color Apply
        </body> */}

          <Settings visibility={false} />
        </Container>
      </>
    </>
  );
};

export default App;
