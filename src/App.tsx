
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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


  return (
    <div className="text-2xl flex flex-col items-center">
      <Greet name={"Okkasha"} isLoggedIn={false} />
      <Person name={person} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
