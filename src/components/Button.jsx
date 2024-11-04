import React from 'react';

const Button = ({ style = "primary", text, onClick, type = "button" }) => {
  const styles = {
    primary: "bg-blue-600 text-white p-2 mx-1 rounded hover:bg-blue-700 transition",
    success: "bg-green-500 text-white p-2 mb-5 rounded hover:bg-green-600 transition",
    danger: "bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition",
    warning: "bg-yellow-400 text-black px-2 py-1 mx-1 rounded hover:bg-yellow-500 transition"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      class={`px-4 py-2 rounded transition ${styles[style]}`}
    >
      {text}
    </button>
  );
};

export default Button;