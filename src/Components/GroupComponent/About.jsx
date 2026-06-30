import { useEffect, useState } from 'react';
import about_image from '../../images/About_image.png';
import { useSelector } from 'react-redux';
import SvgIcons from "../BaseComponent/SvgIcons";

const About = () => {
    const [age, setAge] = useState(null);
    const selector = useSelector(state => state?.schemaReducer?.schema?.about);
    const content = selector?.content;

    useEffect(() => {
        if (content?.data?.dob) {
            const birthYear = new Date(content.data.dob).getFullYear();
            const currentYear = new Date().getFullYear();
            setAge(currentYear - birthYear);
        }
    }, [content]);

    const formatKey = (key) => {
        return key
            .replace(/_/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase());
    };

    // Prepare left/right columns
    let left = [], right = [];
    if (content?.data) {
        const entries = Object.entries(content.data);
        const half = Math.ceil(entries.length / 2);
        left = entries.slice(0, half);
        right = entries.slice(half);
    }

    return (
        <section className="about-section" id="page_About">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-4 text-center">
                        <div className="about-image-wrapper">
                            <img
                                src={about_image}
                                alt="About"
                                className="about-image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-8">

                        <span className="about-subtitle">
                            ABOUT ME
                        </span>
                        <p className="about-description">
                            {content?.description}
                        </p>
                    </div>

                </div>
                <div className="row mt-4">
                    {content?.data &&
                        Object.entries(content.data).map(([key, value], index) => (
                            <div
                                className="col-md-4 mb-3"
                                key={index}
                            >
                                <div className="info-card">
                                    <div className="info-icon">
                                        <SvgIcons iconType={key} />
                                    </div>
                                    <div>
                                        <h6>
                                            {formatKey(key)}
                                        </h6>
                                        <p>
                                            {key === "age"
                                                ? age
                                                : value}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </section>
    );
}

export default About;
