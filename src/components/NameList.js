import React from "react";
import Person from "./Person";

function NameList() {
  const names=['Bruce','Clark','Diana','Bruce']
  const persons = [
    {
      id: 1,
      name: "rahul",
      age: 24,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "angular",
    },

    {
      id: 3,
      name: "Batman",
      age: 35,
      skill: "android",
    },
    {
      id: 4,
      name: "Superman",
      age: 21,
      skill: "react native",
    },
  ];
const nameList = names.map((name,index) => <h2  key={index}>{index}{name}</h2> );
  return <div>{nameList}</div>;
}

export default NameList;
