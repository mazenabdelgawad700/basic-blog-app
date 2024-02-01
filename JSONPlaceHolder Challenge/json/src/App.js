/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
// import List from "./components/List";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        if (!response.ok) throw Error("Error 404");
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
