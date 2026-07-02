import heroImage from '../../images/home.jpg';
import flightImage from '../../images/flaight.png';
import SvgIcon from '../BaseComponent/SvgIcons';
import resume from '../../Files/Dhenesh_Kumar_Resume.pdf';
const Home = () => {

    const techBadges = [
        { icon: 'HTML', label: 'HTML' },
        { icon: 'CSS', label: 'CSS' },
        { icon: 'JAVASCRIPT', label: 'JS' },
        { icon: 'ANGULAR', label: 'Angular' },
        { icon: 'DOTNET', label: '.NET' },
        { icon: 'REACT', label: 'React' }
    ];

    return (
        <section id='page_Home' className="hide">
            <div className="container">
                <div className="home_flight">
                    <img src={flightImage} alt="Flying plane" />
                </div>
                <div className="home_inner">
                    <div className="home_left">
                        <span className="home_label">FULL STACK DEVELOPER</span>
                        <h1>
                            I Build.
                            <span>Create Experiences.</span>
                        </h1>
                        <p className="home_desc">
                            Full Stack Developer with passion for clean code, creative animation, and delightful user experiences.
                        </p>
                        <div className="home_actions">
                            <a className="home_btn home_btn_primary" href="#page_Skills">View My Work</a>
                            <a className="home_btn home_btn_secondary" href={resume} download={'Dhenesh_kumar_resume'}>Download CV</a>
                        </div>
                        <div className="home_badges">
                            {techBadges.map((item) => (
                                <span className="home_badge_item" key={item.label}>
                                    <SvgIcon iconType={item.icon} className="badge-icon" width={20} height={20} />
                                    <span>{item.label}</span>
                                </span>
                            ))}
                        </div>
                        <div className="home_code_block">
                            <div className="code_header">
                                <span className="code_dot code_dot_red"></span>
                                <span className="code_dot code_dot_yellow"></span>
                                <span className="code_dot code_dot_green"></span>
                            </div>
                            <pre>
                                <code>
                                    {`const developer = {
  code: true,
  design: true,
  animate: true
};`}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="home_right">
                        <div className="hero_image_wrapper">
                            <img src={heroImage} alt="Developer illustration" className="hero_image" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;
