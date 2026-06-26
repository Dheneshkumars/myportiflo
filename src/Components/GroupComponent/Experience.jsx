import "../../style/experience.css";
import experince_img from "../../images/experience.png";
import { FaLaptopCode, FaCode, FaBriefcase, FaExternalLinkAlt, FaAward } from "react-icons/fa";
import CountUp from "react-countup";

const experienceSummary = [
    {
        text: "Developed and maintained enterprise web applications using ASP.NET Core, Angular, and MySQL.",
    },
    {
        text: "Designed and implemented RESTful APIs for seamless communication between frontend and backend.",
    },
    {
        text: "Built responsive and interactive user interfaces using Angular, TypeScript, HTML, CSS, and Bootstrap.",
    },
    {
        text: "Designed and optimized MySQL database schemas, stored procedures, and queries for better performance.",
    },
    {
        text: "Implemented CRUD operations, authentication, and role-based authorization.",
    },
    {
        text: "Fixed bugs, enhanced existing features, and improved application performance.",
    },
    {
        text: "Collaborated with cross-functional teams in an Agile/Scrum environment and participated in code reviews.",
    },
    {
        text: "Used Git for version control and maintained code quality through best development practices.",
    },
];

const gowebezSummary = [
    {
        text: "Developed responsive and high-performance web applications using React.js, Angular, JavaScript, HTML5, CSS3, SCSS, and Bootstrap.",
    },
    {
        text: "Built reusable and modular UI components to improve maintainability and reduce development time.",
    },
    {
        text: "Integrated RESTful APIs and managed asynchronous data using Axios and Fetch API.",
    },
    {
        text: "Collaborated with UI/UX designers to convert Figma and Adobe XD designs into pixel-perfect responsive interfaces.",
    },
    {
        text: "Implemented state management using Redux and React Hooks.",
    },
    {
        text: "Optimized application performance using lazy loading and code splitting.",
    },
    {
        text: "Worked closely with backend developers and QA teams in Agile/Scrum.",
    },
    {
        text: "Maintained source code using Git and followed best development practices.",
    },
];

const Experience = () => {
    return (
        <section className="experience-section" id="page_Experience">
            <div className="container">
                <div className="experience-header text-center">
                    <span className="experience-subtitle">
                        MY JOURNEY
                    </span>
                    <h2 className="section_heading">
                        Work Experience
                    </h2>
                    <p className="experience-desc">
                        Passionate Full Stack Developer with over 3 years of experience
                        developing responsive, scalable and enterprise-grade web
                        applications using modern frontend and backend technologies.
                    </p>

                </div>
                <div className="timeline-wrapper">
                    <div className="timeline-item"> <div className="timeline-left">
                        <div className="timeline-line"></div>
                        <div className="timeline-circle">
                            <FaLaptopCode />
                        </div>
                        <div className="timeline-year">
                            <h4>2021</h4>
                            <span>to</span>
                            <h4>2024</h4>
                        </div>
                        <small>2.4 Years</small>
                    </div>
                        <div className="timeline-content">
                            <div className="experience-card">
                                <div className="card-header-custom">
                                    <div>
                                        <h3 className="job-title">
                                            Frontend Developer
                                        </h3>
                                        <h6 className="company-name">
                                            Gowebez Software Solution
                                        </h6>
                                    </div>
                                    <span className="experience-date">
                                        Oct 2021 - Feb 2024
                                    </span>
                                </div>
                                <ol className="experience-list">
                                    {gowebezSummary.map((item, index) => (
                                        <li key={index}>
                                            {item.text}
                                        </li>

                                    ))}
                                </ol>
                                <div className="tech-stack">
                                    <span>React.js</span>
                                    <span>Angular</span>
                                    <span>JavaScript</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>SCSS</span>
                                    <span>Bootstrap</span>
                                    <span>Redux</span>
                                    <span>REST API</span>
                                    <span>Git</span>
                                </div>
                                <div className="experience-footer">
                                    <a
                                        href="https://app.inflowcare.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-btn"
                                    >
                                        <FaExternalLinkAlt className="ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-left">
                            <div className="timeline-line"></div>
                            <div className="timeline-circle">
                                <FaCode />
                            </div>
                            <div className="timeline-year">
                                <h4>2025</h4>
                                <span>to</span>
                                <h4>2026</h4>
                            </div>
                            <small>7 Months</small>
                        </div>
                        <div className="timeline-content">
                            <div className="experience-card">
                                <div className="card-header-custom">
                                    <div>
                                        <h3 className="job-title">
                                            Software Developer
                                        </h3>
                                        <h6 className="company-name">
                                            NOHITATU Technologies Pvt. Ltd.
                                        </h6>
                                    </div>
                                    <span className="experience-date">
                                        Dec 2025 - Jun 2026
                                    </span>
                                </div>
                                <ol className="experience-list">
                                    {experienceSummary.map((item, index) => (
                                        <li key={index}>
                                            {item.text}
                                        </li>
                                    ))}
                                </ol>
                                <div className="tech-stack">
                                    <span>ASP.NET Core</span>
                                    <span>C#</span>
                                    <span>Angular</span>
                                    <span>TypeScript</span>
                                    <span>MySQL</span>
                                    <span>REST API</span>
                                    <span>Entity Framework</span>
                                    <span>Git</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience-bottom">
                    <div className="row mb-5">
                        <div className="col-lg-12 text-center">
                            <img
                                src={experince_img}
                                alt="Experience"
                                className="experience-image w-100"
                            />
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-card years-card">
                                <FaLaptopCode className="stats-icon" />

                                <h2>
                                    <CountUp end={3} duration={2} suffix="+" />
                                </h2>

                                <h5>Years Experience</h5>

                                <p>
                                    Building responsive, scalable, and user-friendly web applications.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-card project-card">
                                <FaBriefcase className="stats-icon" />

                                <h2>
                                    <CountUp end={10} duration={2} suffix="+" />
                                </h2>

                                <h5>Projects Delivered</h5>

                                <p>
                                    Successfully completed enterprise and client-based applications.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-card tech-card">
                                <FaCode className="stats-icon" />

                                <h2>
                                    <CountUp end={15} duration={2} suffix="+" />
                                </h2>

                                <h5>Technologies</h5>

                                <p>
                                    Experienced in modern frontend, backend, and database technologies.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-card commit-card">
                                <FaAward className="stats-icon" />

                                <h2>
                                    <CountUp end={100} duration={2.5} suffix="%" />
                                </h2>

                                <h5>Commitment</h5>

                                <p>
                                    Focused on clean code, quality delivery, and continuous learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;