import React from "react";

const TextInput = ({ valueName, value, onChange, placeholder }) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(valueName, e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextInput;
