import experince_img from '../../images/experience.webp';

const Experince = () => {
    return (
        <section className='experience_body hide' id='page_Experience'>
            <div className="container">
                <h3 className='section_heading'>Experience</h3>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="my-2">
                            <div className="d-flex align-items-center">
                                <h6 className='exp_head m-0'>Machine Operator </h6>
                                <span className='px-2'>[Sep 2020 - Jan 2021] :</span>
                            </div>
                            <strong>summary: </strong>
                            <p className='typing'>
                                It's a textile industry [kumaran latex pvt ltd]. I worked in four months of that comapany. The machine build up 3phase induction motor. I have interseted in software developement and website developement. so I have quit my job in that company.
                            </p>
                        </div>
                        <div className="my-2">
                            <div className="d-flex align-items-center">
                                <h6 className='exp_head m-0'>Junior web Developer </h6>
                                <span className='px-2'>[Oct 2021 - Jun 2023] :</span>
                            </div>
                            <strong>summary: </strong>
                            <p className='typing'>
                                Dedicated and skilled junior web developer with two years of hands-on experience in designing, developing, and maintaining web applications. Proficient in front-end and back-end technologies, I have a strong foundation in creating responsive and user-friendly websites. Eager to contribute my expertise to dynamic projects and continue to grow as a developer. I worked in Junior front end web developer in Gowebez software private ltd comapany chennai. I have worked three projects, one is User Interface project and another two's UX projects.I have used Html,css,scss,bootstrap,Javascript,Jquery,React js,Node Js and angular.
                            </p>
                            <strong>Website link:</strong><span> &nbsp;<a href='https://app.inflowcare.com/' target='_blank'>Inflowcare.com</a></span>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <img src={experince_img} className='experience_img' alt='experience' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experince;