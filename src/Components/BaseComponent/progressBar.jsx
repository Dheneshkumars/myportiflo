import "../../style/progress.css";

const ProgressBar = ({ percent, text }) => {
    return (
        <div className="progress-wrapper">

            <div className="progress-header">

                <span>{text}</span>

                <strong>{percent}%</strong>

            </div>

            <div className="progress-track">

                <div
                    className="progress-fill"
                    style={{
                        width: `${percent}%`
                    }}
                />

            </div>

        </div>
    );
};

export default ProgressBar;