import React from "react";
import "./icon.scss";
import "./icons/home.svg";

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="xinchen-icon">
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;
