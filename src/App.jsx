import { useState } from "react";
import SelectChip from "./SelectChip";
import InputField from "./InputField";
import SpeedDial from "./SpeedDial";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Oversigt over mulige komponenter til Task-Manager App</h1>
      <p>
        Her kan vi løbende indsætte kodestykker, som vi mener kan være relevante
        til app-en
        <br />
        og samtidigt øve os i at bruge react, inden vi går igang med at kode
        siden/appen.
      </p>
      <h2>Input felt med outline</h2>
      <h3>mui.com</h3>
      <p>
        Jeg synes det er et godt og simpelt felt - fordel at placeholder/label
        forbliver synligt
      </p>
      <InputField />
      <h2>Select med chip fra mui</h2>
      <h3>mui.com</h3>
      <p>
        Overskuelig liste og man kan følge med i hvad man har valgt uden at
        skulle scrolle listen igennem igen
      </p>
      <SelectChip />
      <h2>Speed dial fra mui</h2>
      <h3>mui.com</h3>
      <p>
        Sjov måde at lave en genvej til at tilføje og rette i to-do lister, men
        kan give problemer ifht. tilgængelighed, når man kommer til at ramme
        forkert så den lukker igen
      </p>
      <SpeedDial />
    </>
  );
}

export default App;
