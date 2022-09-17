import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
let headers = { "Access-Control-Allow-Origin": "*" };

function App() {
  let [first, setfirst] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8080/books");
        console.log(res.data[0]);
        setfirst(res.data[0]);
      } catch (error) {
        console.log("error");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>I &lt;3 Franky</h1>
        <p>Hello everyone</p>
        <h2>{first !== "" && first}</h2>
      </header>
    </div>
  );
}

export default App;
