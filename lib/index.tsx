import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icon/icon";

ReactDOM.render(
  <div>
    <Icon name="home" className="my-home" />
    <Icon name="add" fill="#90caf9" />
    <Icon name="delete" />
    <Icon name="trashcan" />
    <Icon name="trashcan" fill="rgb(76, 175, 80)" />
    <Icon name="loading" spin />
  </div>,
  document.querySelector("#root")
);
