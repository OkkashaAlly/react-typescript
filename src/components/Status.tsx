import Heading from "./Heading";
import Oscar from "./Oscar";

type StatusProps = {
  status: "loading" | "successfull" | "error";
};

const Status = (props: StatusProps) => {
  let message;

  if (props.status == "loading") message = "Loading data...";
  if (props.status == "successfull") message = "Data successfully loaded";
  if (props.status == "error") message = "Error loading data";

  return (
    <div>
      <h2>Status - {message}</h2>

      <Oscar>
        <Heading>Hellow there</Heading>
      </Oscar>
    </div>
  );
};

export default Status;
