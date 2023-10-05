import SvgIcon from "../BaseComponent/SvgIcons";
import boyImg from "../../images/home.webp"

const Home = () => {

    return (
        <section id='page_Home'>
            <div className="bird_one bird">
                <SvgIcon
                    iconType={"bird"}
                    className="text-success"
                />
            </div>
            <div className="bird_two bird">
                <SvgIcon
                    iconType={"bird"}
                    className="text-success"
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={boyImg} className="boy_img" alt="boy_img" />
                    </div>
                    <div className="col-md-6">
                        <div className="home_content">
                            <h3>Hi, It's Me,</h3>
                            <div className="wrapper">
                                <h2>I am a,</h2>
                                <ul className="dyamic_text ms-1 p-0">
                                    <li><span>Front End Developer</span></li>
                                    <li><span>Freelancer</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;