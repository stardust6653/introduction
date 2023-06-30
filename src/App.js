import Header from "components/Header";
import "./globals.css";
import Banner from "components/Banner";
import PointLine from "components/PointLine";
import Introduce from "components/Introduce";
import Footer from "components/Footer";
import CenterAlignment from "components/layout/CenterAlignment";
import ProjectCardList from "components/ProjectCardList";
import EffortList from "components/EffortList";
import Outro from "components/Outro";
import Stack from "components/Stack";

import { styled } from "styled-components";

function App() {
  return (
    <div className="App">
      <header>
        <FixedComponent>
          <Header />
        </FixedComponent>
      </header>
      <CenterAlignment>
        <Banner />
        <PointLine />
        <Introduce />
        <ProjectCardList />
        <EffortList />
        <Stack />
        <Outro />
      </CenterAlignment>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

const FixedComponent = styled.div`
  z-index: 999;
  width: 100%;
  top: 0;
  position: fixed;
`;
