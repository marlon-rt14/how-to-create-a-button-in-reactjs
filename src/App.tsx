import { Boton } from "./components/Boton";
import { BsFillPlayCircleFill } from "react-icons/bs";

function App() {
  return (
    <div className="container">
      <Boton>Click me!</Boton>
      <Boton style={{ backgroundColor: "red" }}>Click me!</Boton>
      {/* bootstrap classes */}
      <Boton className="bg bg-success rounded rounded-5">Click me!</Boton>
      <Boton className="d-flex justify-content-evenly">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </Boton>
      <Boton className="bg bg-warning">
        <BsFillPlayCircleFill size={30} />
      </Boton>
    </div>
  );
}

export default App;
