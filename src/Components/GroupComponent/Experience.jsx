import experince_img from '../../images/experience.jpg';

const Experince = () => {
    return (
        <section className='experience_body hide' id='page_Experience'>
            <div className="container">
                <h3 className='section_heading'>Experience</h3>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="my-2">
                            <div className="d-md-flex align-items-center">
                                <h6 className='exp_head m-0'>Front End Developer [Gowebez software solution]</h6>
                                <p className='px-2 mb-0'>[Oct 2021 - Feb 2024]</p>
                            </div>
                            <p className='typing'>
                                Dedicated and skilled front web developer with two and half years of hands-on experience in designing, developing, and maintaining web applications. Proficient in front-end and back-end technologies,I have a strong foundation in creating responsive and user-friendly websites. Eager to contribute my expertise to dynamic projects and continue to grow as a developer. I worked in front end web developer in Gowebez software private ltd comapany chennai.I have used Html,css,scss,bootstrap,Javascript,Jquery,React js,Node Js and angular.
                            </p>
                            <strong>Project link:</strong><span> &nbsp;<a href='https://app.inflowcare.com/' target='_blank'>Inflowcare.com</a></span>
                        </div>
                        <div className="my-2">
                            <div className="d-md-flex align-items-center">
                                <h6 className='exp_head m-0'>Front End Developer [Kumaran Latex private ltd]</h6>
                                <p className='px-2 mb-0'>[Feb 2025 - Sep 2025]</p>
                            </div>
                            <p className='typing'>
                                From February 2025 to September 2025, I worked as a Front-End Developer on the ERP team, focusing on building and maintaining user interfaces using React.js. My responsibilities included developing core modules of the ERP system, integrating front-end components with RESTful APIs, and improving overall performance and responsiveness. I collaborated closely with back-end developers and designers to create efficient and user-friendly dashboards and forms. During this period, I optimized the application’s load times, implemented modern React features like hooks and lazy loading, and participated in Agile sprints to ensure timely delivery of new features and enhancements. This role strengthened my skills in React.js, JavaScript, and front-end performance optimization while contributing to a smoother and more responsive ERP user experience.
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img src={experince_img} className='experience_img' alt='experience' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experince;