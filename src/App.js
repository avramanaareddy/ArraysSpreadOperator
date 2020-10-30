import React from "react";
import "./styles.css";

export default function App() {

  const num=[1,2,3]
const num2=[...num.splice(0,num.indexOf(2)),4,...num.splice(num.indexOf(2))]
  console.log(num);
  console.log(num2)
  return (
    <div className="App">
      <h1>Arrays spread operator</h1>
      <h4>{JSON.stringify(num2)}</h4>
    </div>
  );
}
