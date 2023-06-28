import Header from "components/Header";
import "./globals.css";
import Introduce from "components/Introduce";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Introduce />
      </main>
    </div>
  );
}

export default App;
