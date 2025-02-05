import React from "react";

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => <p>{children}</p>;

export default Text;
