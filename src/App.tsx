import { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";
// import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";

function App() {
  const person = {
    firstName: "Okkasha",
    lastName: "Ally",
  };

  const personList = [
    {
      firstName: "Okkasha",
      lastName: "Ally",
    },
    {
      firstName: "Ismail",
      lastName: "Mbarouk",
    },
    {
      firstName: "Omar",
      lastName: "Biggy",
    },
  ];

  const [inputValue, setInputValue] = useState('')

  return (
    <div className="text-2xl flex flex-col items-center">
      {/* <Greet name={"Okkasha"}  isLoggedIn={false} />
      <Person name={person} />
      <PersonList names={personList} />
      <Status status="error" /> */}
      <Input value={inputValue} handleChange={e => setInputValue(e.target.value)} />
      <Button handleClick={(e, id) => console.log("Hellow " + id + e.target)} />
    </div>
  );
}

export default App;
