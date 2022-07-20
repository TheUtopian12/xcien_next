import React from "react";

export const Slider2 = () => {
  return (
    <>
      <div id="slider">
        <input type="radio" name="slider" id="s1" defaultChecked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <label
          htmlFor="s1"
          id="slide1"
          style={{ borderRadius: "20px" }}
        ></label>
        <label
          htmlFor="s2"
          id="slide2"
          style={{ borderRadius: "20px" }}
        ></label>
        <label
          htmlFor="s3"
          id="slide3"
          style={{ borderRadius: "20px" }}
        ></label>
        <label
          htmlFor="s4"
          id="slide4"
          style={{ borderRadius: "20px" }}
        ></label>
      </div>
    </>
  );
};
