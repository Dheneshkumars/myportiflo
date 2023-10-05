import experince_img from '../../images/experience.webp';

const Experince = () => {
    return (
        <section className='experience_body hide' id='page_Experience'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h3 className='section_heading'>Experience</h3>
                        <div className="my-2">
                            <strong>Machine Operator </strong><span>[Sep 2020 - Jan 2021] :</span><br />
                            
                            <p className='typing'>
                                It's a textile industry [kumaran latex pvt ltd]. I worked in four months of that comapany. The machine build up 3phase induction motor. I have interseted in software developement and website developement. so I have quit my job in that company.
                            </p>
                        </div>
                        <div className="my-2">
                            <strong>Front End Developer </strong><span>[Oct 2021- Jul - 2023] :</span><br />
                            <p className='typing'>
                                    In IT field I have one and half years experience in Gowebez software private limted company. In this company, I worked in Junior front end web developer. I have worked three projects, one is User Interface project and another two's UX projects.I have used Html,css,scss,bootstrap,Javascript,Jquery,React js and angular.
                            </p>
                            <strong>Website link:</strong><span> &nbsp;<a href='https://app.inflowcare.com/' target='_blank'>Inflowcare.com</a></span>
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