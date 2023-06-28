import Header from "components/Header";
import "./globals.css";
import Banner from "components/Banner";
import PointLine from "components/PointLine";
import Introduce from "components/Introduce";
import Footer from "components/Footer";
import CenterAlignment from "components/layout/CenterAlignment";

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
      </CenterAlignment>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
