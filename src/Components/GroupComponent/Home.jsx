import flaight from '../../images/flaight.png';
import SvgIcon from '../BaseComponent/SvgIcons';

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
                                <li><span>Front End Developer</span></li>
                                <li><span>Freelancer</span></li>
                            </ul>
                        </div>
                        <p className='text-light'>I am a professional front end developer and software developer.</p>
                        <span>
                            <a href="https://dheneshkumars.github.io" target="_blank" rel="noopener noreferrer">
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
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;
