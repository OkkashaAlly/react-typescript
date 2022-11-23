type propType = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: propType) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          Hellow {props.name} you have {props.messageCount} unread messages
        </div>
      ) : (
        <h1>Welcome guest</h1>
      )}
    </div>
  );
};

export default Greet;
