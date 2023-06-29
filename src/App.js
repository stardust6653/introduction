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

function App() {
  return (
    <div className="App">
      <header>
        <Header />
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
