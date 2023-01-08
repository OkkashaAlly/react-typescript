import Button from "./components/html/Button";
import Toast from "./components/templateliterals/Toast";

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

  const stingItems = ["Okkasha", "Omar", "Nabil"];
  const numberItems = [1, 2, 3];
  const objItems = [
    { id: 1, name: "Okkasha" },
    { id: 2, name: "Omar" },
    { id: 3, name: "Nabil" },
  ];

  return (
    <div className="text-2xl flex flex-col items-center">
      {/* <Toast position={"center"}/> */}
      <Button
        variants="primary"
        onClick={() => {
          console.log("Hellow");
        }}
      >BUtton</Button>
    </div>
  );
}

export default App;
