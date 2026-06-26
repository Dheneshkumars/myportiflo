import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import SvgIcon from "../BaseComponent/SvgIcons";
import ProgressBar from "../BaseComponent/progressBar";

const Skill = ({ skillData }) => {
    const swiperSettings = {
        modules: [Autoplay],
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
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

    const sections = [
        {
            title: "Frontend Technologies",
            side: "front_end",
        },
        {
            title: "Backend Technologies",
            side: "back_end",
        },
    ];

    const getSkills = (side) =>
        skillData?.content?.filter(
            (item) =>
                item.type === "primary" &&
                item.side === side
        );

    return (
        <section className="skills-section" id="page_Skills">

            <div className="container">

                <div className="text-center mb-5">

                    <span className="experience-subtitle">
                        MY SKILLS
                    </span>

                    <h2 className="section_heading">
                        Technical Skills
                    </h2>

                    <p className="experience-desc">
                        Experienced in modern frontend and backend
                        technologies for building responsive,
                        scalable and enterprise-grade web applications.
                    </p>

                </div>

                {sections.map((section) => (
                    <div className="mb-5" key={section.side}>
                        <h4 className="skill-category">
                            {section.title}
                        </h4>
                        <Swiper
                            {...swiperSettings}
                            className="skill-swiper mt-4"
                        >
                            {getSkills(section.side)?.map((skill, index) => (
                                <SwiperSlide key={index}>
                                    <div className="skill-card">
                                        <div className="skill-icon">
                                            <SvgIcon iconType={skill.skill} />
                                        </div>

                                        <h5 className="skill-name">
                                            {skill.skill}
                                        </h5>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;