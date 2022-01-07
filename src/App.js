import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import Table from "./table/Table.js";

import './App.css';

const ENDPOINT = "https://mst-full-stack-dev-test.herokuapp.com/";

function App() {

  const [response, setResponse] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("data-update", data => {
      setResponse(prevResponse => {
        return [...prevResponse, data];
      })
    });
  }, []);

  return (
    <div className="main">
      <header>
        <h2>List of Golf players</h2>
      </header>
      {
        !response.length
          ? <p>No players registered yet!</p>
          : <div className="table">
            <Table response={response} />
          </div>
      }
    </div>
  );
}

export default App;
