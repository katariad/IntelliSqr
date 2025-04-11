import React from "react";

interface Buttonprops {
  text: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ text, type = "button" }: Buttonprops) {
  const stylebutton: React.CSSProperties = {
    backgroundColor: "#2B3A67",
    height: "60px",
    border: "1px solid #2B3A67",
    borderRadius: "8px",
    padding: "16px 24px",
    color: "white",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <button style={stylebutton} type={type}>
      {text}
    </button>
  );
}
