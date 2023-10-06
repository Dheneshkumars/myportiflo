import flaight from '../../images/flaight.png';
import boyImg from "../../images/home.webp"

const Home = () => {

    return (
        <section id='page_Home' className="hide">
            <div className="bird_one bird">
                <img src={flaight} alt="flaight" width={100} />
            </div>
            <div className="bird_two bird">
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
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;