import flaight from '../../images/flaight.png';
import SvgIcon from '../BaseComponent/SvgIcons';
import resume from '../../Files/Dhenesh_kumar_resume.pdf';
const Home = () => {

    return (
        <section id='page_Home' className="hide">
            <div className="bird_one bird">
                <img src={flaight} alt="flaight" width={100} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="home_content">
                        <h3 className='text-light'>Hi, It's Me,</h3>
                        <div className="wrapper">
                            <h2 className='text-light'>I am a,</h2>
                            <ul className="dyamic_text ms-1 p-0">
                                <li><span>Mern Stack Developer</span></li>
                                <li><span>App Developer</span></li>
                            </ul>
                        </div>
                        <p className='text-light'>I am a professional Mern stack Developer and App developer.</p>
                        <span>
                            <a href="https://github.com/Dheneshkumars" target="_blank" rel="noopener noreferrer">
                                <SvgIcon
                                    iconType={'git'}
                                />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/dhenesh-kumar-s-626b68291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                <SvgIcon
                                    iconType={'linkdin'}
                                />
                            </a>
                        </span>
                        <span>
                            <b>
                                <a href={resume} style={{ color: "white",textDecoration:'none' }} download={'Dhenesh_kumar_resume'}><SvgIcon iconType={"resume"} /></a>
                            </b>
                        </span>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;
