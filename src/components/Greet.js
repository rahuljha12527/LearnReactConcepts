import React from "react";

export const Greet = props => {
  // console.log(props);
  const {name,heroname}=props;  
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroname}
      </h1>
      
    </div>
  );
};

export default Greet;
