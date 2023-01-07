type personListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
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
