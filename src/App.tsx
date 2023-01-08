import Button from "./components/Button";
import { Container } from "./components/Container";
import Greet from "./components/Greet";
import { Input } from "./components/Input";
import LoggedIn from "./components/state/LoggedIn";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import User from "./components/context/User";
import Counter from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import Profile from "./components/Auth/Profile";
import Private from "./components/Auth/Private";

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
      {/* <Greet name={"Okkasha"} isLoggedIn={false} />
      <Person name={person} />
      <PersonList names={personList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Button handleClick={(_, id) => console.log("Clicked", id)} />
      <Input value="Okkasha" /> */}
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <LoggedIn />
      <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      <Profile isLoggedIn={true} component={Private} />
    </div>
  );
}

export default App;
