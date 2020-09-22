/*
  How to run:
    1. npm install create-react-app
    2. npm install antd
    3. replace App.js with this file.
*/

import React, { useState } from "react";
import "./App.css";
import { Checkbox, Button, Typography } from "antd";
import "antd/dist/antd.css";

function App() {
  const [list, setList] = useState([{ checked: false, text: "some text", id: Math.random() }]);
  const material = ["ocean of noise", "electric blue", "everything now", "neon bible", "crown of love"];

  return (
    <div style={{ width: "300px", padding: "30px", display: "flex", flexDirection: "column" }}>
      <div style={{ flexDirection: "row" }}>
        <Button
          type="primary"
          style={{ width: "100px", marginRight: "10px" }}
          onClick={() => {
            const tempList = [{ checked: true, text: material[list.length - 1], id: Math.random() }, ...list];
            setList(tempList);
          }}
        >
          Add to top
        </Button>
        <Button
          style={{ width: "100px" }}
          onClick={() => {
            const tempList = Object.assign([], list).reverse();
            setList(tempList);
          }}
        >
          Reverse
        </Button>
      </div>
      {list.map((item, index) => {
        return (
          <div key={item.id} style={{ width: "100%", height: "40px", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
            <Checkbox
              checked={item.checked}
              onClick={(e) => {
                const tempList = Object.assign([], list);
                tempList[index].checked = e.target.checked;
                setList(tempList);
              }}
            />
            <Typography.Text code>{item.text}</Typography.Text>
          </div>
        );
      })}
    </div>
  );
}

export default App;
