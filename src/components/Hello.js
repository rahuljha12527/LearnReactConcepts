import React from "react";

const Hello = () => {
  // return (
  //     <div>
  //         <h1>Hello Rahul and Mateshwari</h1>
  //     </div>
  // )

  return React.createElement(
    "div",
    null,
    React.createElement("h1", {id:'hello',className:'dummy className'}, "Hello Rahuljha")
  );
};

export default Hello;
