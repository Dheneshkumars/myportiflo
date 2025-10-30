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
        <section id='page_About' className='hide'>
            <div className="container py-4">
                <div className="about-parent row">
                    <div className="about-child1 col-lg-4">
                        <img src={about_image} alt='about' className='about_image' />
                    </div>
                    <div className="about-child2 col-lg-8">
                        <h3 className='section_heading'>About</h3>
                        <div className="line"></div>
                        <div className="about-content">
                            <p>{content?.description}</p>
                            <div className="row">
                                {/* Left Column */}
                                <div className="col-lg-6">
                                    <ul className="about-ul">
                                        {left.map(([key, value], index) => (
                                            <li key={index} className="about-list">
                                                <SvgIcons  iconType={key} />
                                                <strong>{formatKey(key)} :&nbsp;</strong>
                                                <span> {key === "age" ? age : String(value)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Column */}
                                <div className="col-lg-6">
                                    <ul className="about-ul">
                                        {right.map(([key, value], index) => (
                                            <li key={index} className="about-list">
                                                <SvgIcons  iconType={key} />
                                                <strong>{formatKey(key)} :&nbsp; </strong>
                                                <span> {key === "age" ? age : String(value)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
