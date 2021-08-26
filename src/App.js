import { useLocation } from "react-router";
import "./App.css";
import Navbar from "./components/NavBar";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      {useLocation().pathname !== "/" && 
        <span>
          <Navbar />
        </span>
      }
      <Routes />
    </>
  );
}

export default App;
