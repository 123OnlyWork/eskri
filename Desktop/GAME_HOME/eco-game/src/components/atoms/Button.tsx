import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  text: string;
  onClick?: () => void;
  color?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, text, onClick, color, className }) => {
  const buttonStyle = {
    padding: "5px 10px",
    backgroundColor: color || "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "5px",
  };

  return to ? (
    <Link to={to} className={className} style={buttonStyle}>
      {text}
    </Link>
  ) : (
    <button onClick={onClick} style={buttonStyle} className={className}>
      {text}
    </button>
  );
};

export default Button;
