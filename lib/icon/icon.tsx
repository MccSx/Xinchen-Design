import React from "react";
import "./icons/home.svg";

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;
