import experince_img from '../../images/experience.webp';

const Experince = () => {
    return (
        <section className='experience_body hide' id='page_Experience'>
            <div className="container">
                <h3 className='section_heading'>Experience</h3>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="my-2">
                            <div className="d-md-flex align-items-center">
                                <h6 className='exp_head m-0'>Full Stack Developer & App Developer </h6>
                                <p className='px-2 mb-0'>[Oct 2021 - Feb 2024] :</p>
                            </div>
                            <strong>summary: </strong>
                            <p className='typing'>
                                Dedicated and skilled front web developer with two and half years of hands-on experience in designing, developing, and maintaining web applications. Proficient in front-end and back-end technologies,I have a strong foundation in creating responsive and user-friendly websites. Eager to contribute my expertise to dynamic projects and continue to grow as a developer. I worked in front end web developer in Gowebez software private ltd comapany chennai.I have used Html,css,scss,bootstrap,Javascript,Jquery,React js,Node Js and angular.
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