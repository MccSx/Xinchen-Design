import React from "react";
import "./icon.scss";
import "./importAllIcon";
import handleClasses from "../utils/handleClasses";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  spin?: boolean;
}

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  className,
  spin,
  ...resetPorps
}) => {
  return (
    <svg
      className={handleClasses("xinchen-icon", className, spin ? "isSpin" : "")}
      {...resetPorps}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;
