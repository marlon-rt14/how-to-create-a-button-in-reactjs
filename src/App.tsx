import { Boton } from "./components/Boton";

function App() {
  return (
    <div className="container">
      <Boton >Hola mundo</Boton>
      <Boton style={{backgroundColor: "red"}} >Hola mundo</Boton>
      <Boton >Hola mundo</Boton>
    </div>
  );
}

export default App;

