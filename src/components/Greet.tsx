type propType = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: propType) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          Hellow {props.name} you have {messageCount} unread messages
        </div>
      ) : (
        <h1>Welcome guest</h1>
      )}
    </div>
  );
};

export default Greet;
