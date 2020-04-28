import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icon/icon";

ReactDOM.render(
  <div>
    <Icon name="home" />
    <Icon name="add" />
    <Icon name="delete" />
    <Icon name="trashcan" />
  </div>,
  document.querySelector("#root")
);
