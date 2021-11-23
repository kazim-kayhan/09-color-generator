import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const hexColor = rgbToHex(...rgb);
  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  return (
    <article
      className={`color ${
        index > 6 && index < 13
          ? "color-normal"
          : index >= 13
          ? "color-light"
          : null
      }`}
      style={{
        backgroundColor: `rgb(${rgb})`,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hexColor}`);
      }}
      title="Copy to clipboard"
    >
      {alert && <p className="color-value">Copied ot clipboard</p>}
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
    </article>
  );
};

export default SingleColor;
