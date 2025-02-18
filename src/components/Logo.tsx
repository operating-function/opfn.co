import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
}

const Logo = ({
  className = "",
  size = 24,
  color = "white",
}: LogoProps) => {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg
        style={{ width: "100%", height: "100%" }}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M335.208 94.044C301.29 94.044 267.031 116.959 267.031 168.122V175H325V325H267.031V329.381C267.031 400.339 215.614 437.49 164.761 437.49C113.91 437.49 62.4917 400.339 62.4917 329.381V0H0V500H403.389V168.177C403.389 117.014 369.126 94.044 335.208 94.044Z"
          fill={color}
        />
        <path
          d="M96.6104 0.000244141V329.945C96.6104 381.194 130.869 404.149 164.787 404.149C198.706 404.149 232.964 381.194 232.964 329.945V325H175V175H232.964V168.41C232.964 97.3298 284.381 60.1152 335.233 60.1152C386.086 60.1152 437.504 97.3298 437.504 168.41V499.999H500V0.000244141H96.6104Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Logo;
