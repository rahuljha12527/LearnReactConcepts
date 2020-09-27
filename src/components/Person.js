import React from "react";

function Person({person,key}) {
  return (
    <div>
      <h2>
       {key} I am {person.name}. I am {person.age} years old. I have {person.skill}{" "}
        set.
      </h2>
    </div>
  );
}

export default Person;
