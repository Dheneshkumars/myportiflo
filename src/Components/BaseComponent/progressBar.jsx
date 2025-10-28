import React from "react";
import "../../style/progress.css";

const ProgressBar = ({ percent, text }) => {
    const clampedPercent = Math.min(Math.max(percent, 0), 100);

    return (
        <div className="progress-container">
            <div className="progress-label">
                <span className="skill-text">{text}</span>
                <span className="skill-percent">{clampedPercent}%</span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${clampedPercent}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
