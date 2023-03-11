
import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';


function App() {
  
// fetch("https://catfact.ninja/fact").then((res) => res.json())
// .then((data) => {
// console.log(data);
// });
const [catFact, setCatFact] = useState("");
const fetchCatFact =() => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact);
  });

}
useEffect(() => {
  fetchCatFact();
  
}, []);


  return (
    <div className="App">
    
    <h1><button onClick={fetchCatFact}>Generate Cat Facts</button> </h1>
    <p>{ catFact}</p> 
    </div>
  );
}

export default App;
