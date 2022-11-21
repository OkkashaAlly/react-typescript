type personListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map(name => (
        <p>
          {name.firstName} {name.lastName}
        </p>
      ))}
    </div>
  );
};

export default PersonList;
