import { useSelector } from "react-redux";
import SvgIcon from "../BaseComponent/SvgIcons";
import educationImg from "../../images/education.jpg";


const Education = ({
    educationData
}) => {
    const educationArray = educationData && educationData.type == "education" ? educationData.content : [];
    const selector = useSelector(state => state?.pageReducer);
    const activePage = selector && selector?.activepage;

    return (
        <section id="page_Education" className="hide">
            <div className="container">
                <div className="education_header">
                    <h3>Education</h3>
                </div>
                <div className="education-flexbox">
                    <div className="educationImg">
                        <img src={educationImg} alt="education" />
                    </div>
                    <div className="timeline">
                        {
                            Array.isArray(educationArray) && educationArray.length > 0 && educationArray.map((data, index) => {
                                return (
                                    <div className={`timeline-item ${activePage == 'Education' ? "scroll-animation" : ""}`} key={index}>
                                        <div className="timeline-content">
                                            <h6 className="education_name">{data?.type}</h6>

                                            <div className="edu-row">
                                                <strong>Institute Name:</strong>
                                                <span>
                                                    <SvgIcon iconType="school" /> {data?.Name}
                                                </span>
                                            </div>

                                            <div className="edu-row">
                                                <strong>Mark obtained:</strong>
                                                <span>
                                                    <SvgIcon iconType="score" /> {data?.mark_obtained}
                                                </span>
                                            </div>

                                            <div className="edu-row">
                                                <strong>Duration:</strong>
                                                <span>
                                                    <SvgIcon iconType="date" /> {data?.period}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;