import React from "react";

function NumberList() {
  // const numbers = [1, 2, 3, 4, 5, 6, 7];
  // const listItem = numbers.map((n) => <li key={numbers.toString()}>{n}</li>);

  // return <ul>{listItem}</ul>;

  let listItem;

  const handleClick = () => {
    alert("Button Clicked");

    const numbers = [1, 2, 3, 4, 5, 6, 7];

    alert("Numbers assigned");

    listItem = numbers.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));

    alert("listItem assigned");

    alert("listItem called");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      <ul>{listItem}</ul>
    </div>
  );
}

export default NumberList;
