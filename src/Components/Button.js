import React from "react";

export const Button = ({ cls, label, handleOnButtonClick }) => {
  //   const handleOnButtonClick = (val) => {
  //     // console.log(val);
  //   };

  return (
    <div className={"btn " + cls} onClick={() => handleOnButtonClick(label)}>
      {label}
    </div>
  );

  // <div className={"btn" + cls}>{label}</div>;
};

// export default Button;
