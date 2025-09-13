import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const ProgressBar = ({ text, percent, id }) => {
    const { activepage } = useSelector(state => state?.pageReducer);
    const fillRef = useRef(null);
    const [fillColor, setFillColor] = useState("blue");

    useEffect(() => {
        // Set bar color based on percent
        if (percent >= 90) {
            setFillColor("green");
        } else if (percent >= 80) {
            setFillColor("blue");
        } else {
            setFillColor("#007bff"); // default blue
        }

        // Animate the bar width after mount
        if (fillRef.current) {
            fillRef.current.style.width = `${percent}%`;
        }
    }, [percent]);

    return (
        <div className="skill-bar my-3" id={id}>
            <div className="skill-level">
                <div
                    ref={fillRef}
                    className={`skill-fill ${text}-fill ${activepage === "Skills" ? "skill_animation" : ""
                        }`}
                    style={{
                        backgroundColor: fillColor,
                        transition: "width 1s ease-in-out",
                    }}
                >
                    {percent}%
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
