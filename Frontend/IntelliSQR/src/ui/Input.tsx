import React from "react";

const inputstyle: React.CSSProperties = {
  height: "48px",
  border: "1px solid #ecebeb",
  borderRadius: "5px",
  width: "100%",
  padding: "2px 5px",
  textTransform: "capitalize",
  boxSizing: "border-box",
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholdertext?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", placeholdertext = "", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        style={inputstyle}
        placeholder={placeholdertext}
        type={type}
        {...rest}
      />
    );
  }
);

export default Input;
