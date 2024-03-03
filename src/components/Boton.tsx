import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Boton: React.FC<Props> = ({ children, style, ...props }) => {
  return (
    <button style={{ ...defaultStyle, ...style }} {...props}>
      {children}
    </button>
  );
};

const defaultStyle: React.CSSProperties = {
  backgroundColor: "#85f",
  border: "none",
  outline: "none",
  padding: "10px 20px",
  borderRadius: "10px",
};
