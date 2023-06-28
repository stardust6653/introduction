import Header from "components/Header";
import "./globals.css";
import Introduce from "components/Introduce";
import PointLine from "components/PointLine";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Introduce />
        <PointLine text={"음"} />
      </main>
    </div>
  );
}

export default App;
