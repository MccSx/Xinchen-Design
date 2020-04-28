import React from "react";
import "./icon.scss";
import "./importAllIcon";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="xinchen-icon" onClick={() => {}}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;
