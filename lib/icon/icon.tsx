import React from "react";
import "./icon.scss";
import "./importAllIcon";
import handleClasses from "../utils/handleClasses";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  className,
  ...resetPorps
}) => {
  return (
    <svg
      className={handleClasses("xinchen-icon", className)}
      onClick={() => {
        console.log(11);
      }}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;
