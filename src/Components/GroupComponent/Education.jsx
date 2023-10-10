import { useSelector } from "react-redux";
import SvgIcon from "../BaseComponent/SvgIcons";


const Education = ({
    educationData
}) => {
    const educationArray = educationData && educationData.type == "education" ? educationData.content : [];
    const selector = useSelector(state=>state?.pageReducer);
    const activePage = selector && selector?.activepage;

    return (
        <section id="page_Education" className="hide">
            <div className="container">
                <div className="education_header">
                    <h3>Education</h3>
                </div>
                <div className="timeline">
                    {
                        Array.isArray(educationArray) && educationArray.length > 0 && educationArray.map((data, index) => {
                            return (
                                <div className={`timeline-item ${activePage == 'Education' ? "scroll-animation" : ""}`} key={index}>
                                    <div className="timeline-content">
                                        <h6 className="education_name">{data?.type}</h6>
                                        <strong>University: </strong><span>
                                            <SvgIcon
                                                iconType={'university'}
                                            />
                                            {data?.university}
                                        </span><br />
                                        <strong>Institute Name: </strong><span>
                                            <SvgIcon
                                                iconType={'school'}
                                            />
                                            {data?.Name}
                                        </span><br />
                                        <strong>Place: </strong><span>
                                            <SvgIcon
                                                iconType={'place'}
                                            />
                                            {data?.place}</span><br />
                                        <strong>Mark of score: </strong><span>
                                            <SvgIcon
                                                iconType={'score'}
                                            />
                                            {data?.mark_obtained}</span><br />
                                        <span className="date">
                                            <SvgIcon
                                                iconType={'date'}
                                            />
                                            {data?.period}
                                        </span   >
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="language mb-3">
                    <h3>Languages</h3>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        Tamil [Native]
                    </div>
                    <div className="col-3">Read <span className="ps-3 check_tick"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" /><path d="m5.75 7.75l2.5 2.5l6-6.5" /></g></svg></span></div>
                    <div className="col-3">Write <span className="ps-3 check_tick"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" /><path d="m5.75 7.75l2.5 2.5l6-6.5" /></g></svg></span></div>
                    <div className="col-3">Speak <span className="ps-3 check_tick"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" /><path d="m5.75 7.75l2.5 2.5l6-6.5" /></g></svg></span></div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        English
                    </div>
                    <div className="col-3">Read <span className="ps-3 check_tick"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" /><path d="m5.75 7.75l2.5 2.5l6-6.5" /></g></svg></span></div>
                    <div className="col-3">Write <span className="ps-3 check_tick"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" /><path d="m5.75 7.75l2.5 2.5l6-6.5" /></g></svg></span></div>
                    <div className="col-3">Speak <span className="ps-3 check_tick"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" /><path d="m5.75 7.75l2.5 2.5l6-6.5" /></g></svg></span></div>
                </div>
            </div>
        </section>
    )
}

export default Education;