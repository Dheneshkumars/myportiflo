import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import SvgIcon from "../BaseComponent/SvgIcons";
import ProgressBar from "../BaseComponent/progressBar";

const Skill = ({ skillData }) => {
    const swiperSettings = {
        modules: [Autoplay],
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };

    const renderSkills = (side) =>
        skillData?.type === "skill" &&
        skillData?.content
            ?.filter((data) => data.type === "primary" && data.side === side)
            .map((data, index) => (
                <SwiperSlide key={index}>
                    <div className="skill-slide">
                        <span>
                            <SvgIcon iconType={data?.skill} />
                        </span>
                        <strong className="skill-name">{data?.skill}</strong>
                        <ProgressBar
                            percent={data?.percent}
                            text={data?.skill}
                        />
                    </div>
                </SwiperSlide>
            ));

    return (
        <section id="page_Skills" className="hide">
            <div className="container">
                <div className="skill-header">
                    <h3>Skills</h3>
                </div>

                <div className="skill-body">
                    <div className="skill-item">
                        <h6 className="skill_primary"><b>Front End Skill</b></h6>
                        <Swiper {...swiperSettings} className="skill-swiper my-4">
                            {renderSkills("front_end")}
                        </Swiper>

                        <h6 className="skill_primary mt-4"><b>Back End Skill</b></h6>
                        <Swiper {...swiperSettings} className="skill-swiper my-4">
                            {renderSkills("back_end")}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;