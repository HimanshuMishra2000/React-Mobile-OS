import React from "react";

export function System() {
  const h1 = "Mobile operating System";
  const h2 = "Mobile Manufacturers";

  const phone = ["Android", "Blackberry", "iPhone", "Windows Phone"];

  const Brand = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <>
      <h1>{h1}</h1>

      <List shiva={phone} />
      <h2>{h2}</h2>
      <List shiva={Brand} />
    </>
  );
}

function List({ shiva }) {
  // console.log(apple)
  return (
    <>
      <ul>
        {shiva.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
    </>
  );

  //   })}

  // </>)
}
