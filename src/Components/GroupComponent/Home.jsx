import flaight from '../../images/flaight.png';
import boyImg from "../../images/boy.png"
import SvgIcon from '../BaseComponent/SvgIcons';

const Home = () => {

    return (
        <section id='page_Home' className="hide">
            <div className="bird_one bird">
                <img src={flaight} alt="flaight" width={100} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 home_img">
                        <img src={boyImg} className="boy_img" alt="boy_img" />
                    </div>
                    <div className="col-md-7">
                        <div className="home_content">
                            <h3>Hi, It's Me,</h3>
                            <div className="wrapper">
                                <h2>I am a,</h2>
                                <ul className="dyamic_text ms-1 p-0">
                                    <li><span>Front End Developer</span></li>
                                    <li><span>Freelancer</span></li>
                                </ul>
                            </div>
                            <p>I am a professional Junior front end web developer and software developer.</p>
                            <span>
                                <a href="https://github.com/Dheneshkumars/myportiflo" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon
                                        iconType={'git'}
                                    />
                                </a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/in/dhenesh-s-626b68291/" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon
                                        iconType={'linkdin'}
                                    />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;