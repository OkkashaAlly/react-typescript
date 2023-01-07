type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {name.firstName} {name.lastName}
    </div>
  );
};

export default Person;
