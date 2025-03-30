import React, { useState, useEffect } from "react";
import Child from "./Component/Child";

const App = () => {
  const [data, setData] = useState([]);

  // Fetch mock data
  useEffect(() => {

    fetch("https://run.mocky.io/v3/a3f78663-e286-4e10-96a5-e104adc1e628") // Fetch 5 posts
      .then((response) => response.json())
      .then((data) => setData(data))
      console.log(data)
  }, []);

  return (
    <div style={{background:"lightgreen"}}>
      <h1 style={{display:"flex",justifyContent:"center"}}>Props Drilling Example</h1>
      <Child posts={data} />  {/* Passing data as a prop */}

      
    </div>
  );
};

export default App;