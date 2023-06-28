import Header from "components/Header";
import "./globals.css";
import Banner from "components/Banner";
import PointLine from "components/PointLine";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <PointLine />
      </main>
    </div>
  );
}

export default App;
