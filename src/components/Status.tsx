import Heading from "./Heading";
import Oscar from "./Oscar";

type StatusProps = {
  status: "loading" | "successfull" | "error";
};

const Status = ({ status }: StatusProps) => {
  let message;

  if (status == "loading") message = "Loading data...";
  if (status == "successfull") message = "Data successfully loaded";
  if (status == "error") message = "Error loading data";

  return (
    <div>
      <h2>Status - {message}</h2>

      <Oscar>
        <Heading>Oscar goes to Okkasha Ally</Heading>
      </Oscar>
    </div>
  );
};

export default Status;
