type propType = {
  name: string;
};

const Greet = (props: propType) => {
  return <div>Hellow {props.name}</div>;
};

export default Greet;
