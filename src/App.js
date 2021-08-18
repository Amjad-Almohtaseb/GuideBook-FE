import "./App.css";
import Navbar from "./components/NavBar";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Navbar className="fixed" />
      <Routes />
    </>
  );
}

export default App;
