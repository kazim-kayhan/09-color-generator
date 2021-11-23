import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#abcdef");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values(color).all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter  a hex color code"
            className={`${error ? "error" : null}`}
            title="Enter  a hex color code"
          />
          <button type="submit" className="btn">
            Generate
          </button>
          {error && <p>Must be 3/4/6 digits with # prefix. (#fb2143 / #des)</p>}
          <div id="error"></div>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}
export default App;
