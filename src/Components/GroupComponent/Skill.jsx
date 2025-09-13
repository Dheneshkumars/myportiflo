import SvgIcon from "../BaseComponent/SvgIcons";
import ProgressBar from "../BaseComponent/progressBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Skill = ({
    skillData
}) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };



    return (
        <section id="page_Skills" className="hide">
            <div className="container">
                <div className='skill-header'>
                    <h3>Skills</h3>
                </div>
                <div className="skill-body">
                    <div className="skill-item">
                        <h6 className="skill_primary"><b>Front End Skill</b></h6>
                        <Slider {...sliderSettings} className="my-5 row">
                            {
                                skillData && skillData.type === 'skill' ?
                                    skillData?.content && Array.isArray(skillData?.content) && skillData?.content.map((data, index) => {
                                        if (data.type === "primary" && data.side === "front_end") {
                                            return (
                                                <div className="col-md-4 mb-5 skill_card" key={index}>
                                                    <span>
                                                        <SvgIcon iconType={data?.skill} />
                                                    </span>
                                                    <strong>{data?.skill}</strong>
                                                    <ProgressBar
                                                        percent={data?.percent}
                                                        text={data?.skill}
                                                    />
                                                </div>
                                            );
                                        }
                                        return null;
                                    })
                                    :
                                    null
                            }
                        </Slider>

                        <h6 className="skill_primary"><b>Back End Skill</b></h6>
                        <Slider {...sliderSettings} className="my-5 row">
                            {
                                skillData && skillData.type === 'skill' ?
                                    skillData?.content && Array.isArray(skillData?.content) && skillData?.content.map((data, index) => {
                                        if (data.type === "primary" && data.side === "back_end") {
                                            return (
                                                <div className="col-md-4 mb-5 skill_card" key={index}>
                                                    <span>
                                                        <SvgIcon iconType={data?.skill} />
                                                    </span>
                                                    <strong>{data?.skill}</strong>
                                                    <ProgressBar
                                                        percent={data?.percent}
                                                        text={data?.skill}
                                                    />
                                                </div>
                                            );
                                        }
                                        return null;
                                    })
                                    :
                                    null
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;