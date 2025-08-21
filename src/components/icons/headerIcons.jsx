import React from "react";

export const MenuBorder = ({ className, style, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 40 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="border-path"
        stroke="white"
        strokeWidth="2"
        d="M8.35156,16.3281 C12.30218,16.3281 16.25281,16.3281 20.20343,16.3281"
      />
      <path
        className="border-path"
        stroke="white"
        strokeWidth="2"
        d="M20.20343,23.3281 C24.15405,23.3281 28.10468,23.3281 32.0553,23.3281"
      />
      <path
        className="border-path"
        stroke="white"
        strokeWidth="2"
        d="M8.35156,23.3281 C12.30218,23.3281 16.25281,23.3281 20.20343,23.3281"
      />
      <path
        className="border-path"
        stroke="white"
        strokeWidth="2"
        d="M20.20343,16.3281 C24.15405,16.3281 28.10468,16.3281 32.0553,16.3281"
      />
      <path
        strokeWidth="2"
        stroke="white"
        d="M8.35156,16.3281 C12.30218,16.3281 16.25281,16.3281 20.20343,16.3281"
      />
      <path
        strokeWidth="2"
        stroke="white"
        d="M20.20343,16.3281 C24.15405,16.3281 28.10468,16.3281 32.0553,16.3281"
      />
      <path
        strokeWidth="2"
        stroke="white"
        d="M8.35156,23.3281 C12.30218,23.3281 16.25281,23.3281 20.20343,23.3281"
      />
      <path
        strokeWidth="2"
        stroke="white"
        d="M20.20343,23.3281 C24.15405,23.3281 28.10468,23.3281 32.0553,23.3281"
      />
    </svg>
  );
};

export const Cross = ({ className, style, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        strokeWidth="2"
        stroke="white"
        d="M3.51164,18.4882 C9.16849,12.83135 14.82535,7.17449 20.4822,1.51764"
      />
      <path
        strokeWidth="2"
        stroke="white"
        d="M20.4882,18.4884 C14.83135,12.83153 9.17449,7.17466 3.51764,1.51779"
      />
    </svg>
  );
};
export const Arrow = React.forwardRef(
  ({ className, style, width, height }, ref) => {
    return (
      <svg
        ref={ref}
        id="Calque_1"
        className={className}
        style={style}
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13.38 13.05"
        width={width}
        height={height}
      >
        <path d="M6.85,0,5.76,1.09l4.67,4.67H0V7.29H10.43L5.76,12l1.09,1.08,6.53-6.52Z" />
      </svg>
    );
  }
);
export const Border = React.forwardRef(
  ({ ref, className, style, width, height }) => {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        ref={ref}
        style={style}
        viewBox="0 0 133 133"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.5556 1H1V14.6993" stroke="black" stroke-width="2" />
        <path d="M117.444 1H132V14.6993" stroke="black" stroke-width="2" />
        <path d="M15.5556 132H1V118.301" stroke="black" stroke-width="2" />
        <path d="M117.444 132H132V118.301" stroke="black" stroke-width="2" />
      </svg>
    );
  }
);
