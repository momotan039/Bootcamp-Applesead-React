import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Spinner from "./Spinner/Spinner";
import GridSpinner from "./Grid Spinner/GridSpinner";
import CubeSpinner from "./Cube Spinner/CubeSpinner";

function App() {
  const spinners = [<Spinner />, <GridSpinner />,<CubeSpinner/>];
  const num = Math.floor(Math.random() * spinners.length);
  const spinner = spinners[num];
  const [showSpinner, setShowSpinner] = useState(false);
  const [timer, setTimer] = useState(true);

  // when mount component
  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 2000);
  }, []);

  //when change timer value
  useEffect(() => {
    setShowSpinner(!showSpinner);
  }, [timer]);

  return <div className="App">
    {showSpinner && spinner}
    <h1>Please Wait A While</h1>
    </div>;
}

export default App;
