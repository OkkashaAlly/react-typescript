import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = ({ names }: PersonListProps) => {
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
