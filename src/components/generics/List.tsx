import React from "react";

type ListType = {
  id: number;
  name: string;
};

type ListProps<T> = {
  items: T[];
  handleClick: (value: T) => void;
};

// const List = <T extends {}>({
const List = <T extends string | number >({
  items,
  handleClick,
}: ListProps<T>) => {
  return (
    <div>
      <h1>List of items</h1>
      {items.map((item, index) => (
        <p key={index} onClick={() => handleClick(item)}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default List;
