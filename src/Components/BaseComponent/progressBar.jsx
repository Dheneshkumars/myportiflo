import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const ProgressBar = ({ text, percent, id }) => {
  const { activepage } = useSelector(state => state?.pageReducer);
  const fillRef = useRef(null);
  const [fillColor, setFillColor] = useState("#007bff");

  useEffect(() => {
    // Set bar color based on percent
    if (percent >= 90) {
      setFillColor("green");
    } else if (percent >= 80) {
      setFillColor("blue");
    } else {
      setFillColor("#007bff"); // default blue
    }
  }, [percent]);

  useEffect(() => {
    if (fillRef.current) {
      // Start width at 0 for animation
      fillRef.current.style.width = "0%";
      // Animate width after a short delay
      setTimeout(() => {
        fillRef.current.style.width = `${percent}%`;
      }, 100);
    }
  }, [percent, activepage]); // re-run on percent or activepage changes

  return (
    <div className="skill-bar my-3" id={id}>
      <div className="skill-level">
        <div
          ref={fillRef}
          className={`skill-fill ${text}-fill ${activepage === "Skills" ? "skill_animation" : ""}`}
          style={{
            backgroundColor: fillColor,
            transition: "width 1.5s ease-in-out",
          }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;