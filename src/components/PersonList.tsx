import { Name } from "./Person.types";

type personListProps = {
  names: Name[];
};

const PersonList = ({ names }: personListProps) => {
  return (
    <div>
      {names.map((name, i) => (
        <p key={i}>
          {name.firstName} {name.lastName}
        </p>
      ))}
    </div>
  );
};

export default PersonList;
