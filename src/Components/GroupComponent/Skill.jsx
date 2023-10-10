import SvgIcon from "../BaseComponent/SvgIcons";
import ProgressBar from "../BaseComponent/progressBar";

const Skill = ({
    skillData
}) => {


    return (
        <section id="page_Skills" className="hide">
            <div className="container">
                <div className='skill-header'>
                    <h3>Skills</h3>
                </div>
                <div className="skill-body">
                    <div className="skill-item">
                        <h6 className="skill_head">Primary Skills:</h6>
                        <h6 className="skill_primary">Front End Skill</h6>
                        <ul className="my-5 row">
                            {
                                skillData && skillData.type == 'skill' ?
                                    skillData?.content && Array.isArray(skillData?.content) && skillData?.content.map((data, index) => {

                                        if (data.type == "primary" && data.side == "front_end") {
                                            return (
                                                <li className="col-md-4 mb-5 skill_card" key={index}>
                                                    <span>
                                                        <SvgIcon
                                                            iconType={data?.skill}
                                                        />
                                                    </span>
                                                    <strong>
                                                        {
                                                            data?.skill
                                                        }
                                                    </strong>
                                                    <ProgressBar
                                                        percent={data?.percent}
                                                        text={data?.skill}
                                                    />
                                                </li>
                                            )
                                        }

                                    })
                                    :
                                    null
                            }
                        </ul>
                        <h6 className="skill_primary">Back End Skill</h6>
                        <ul className="my-5 row">
                            {
                                skillData && skillData.type == 'skill' ?
                                    skillData?.content && Array.isArray(skillData?.content) && skillData?.content.map((data, index) => {

                                        if (data.type == "primary" && data.side == "back_end") {
                                            return (
                                                <li className="col-md-4 mb-5 skill_card" key={index}>
                                                    <span>
                                                        <SvgIcon
                                                            iconType={data?.skill}
                                                        />
                                                    </span>
                                                    <strong>
                                                        {
                                                            data?.skill
                                                        }
                                                    </strong>
                                                    <ProgressBar
                                                        percent={data?.percent}
                                                        text={data?.skill}
                                                    />
                                                </li>
                                            )
                                        }

                                    })
                                    :
                                    null
                            }
                        </ul>
                        <h6 className="skill_head2">Secondary Skills:</h6>
                        <ul className="my-5 row">
                            {
                                skillData && skillData.type == 'skill' ?
                                    skillData?.content && Array.isArray(skillData?.content) && skillData?.content.map((data, index) => {

                                        if (data.type == "secondary") {
                                            return (
                                                <li className="col-md-4 mb-5 skill_card" key={index}>
                                                    <span>
                                                        <SvgIcon
                                                            iconType={data?.skill}
                                                        />
                                                    </span>
                                                    <strong>
                                                        {
                                                            data?.skill
                                                        }
                                                    </strong>
                                                    <ProgressBar
                                                        percent={data?.percent}
                                                        text={data?.skill}
                                                    />
                                                </li>
                                            )
                                        }

                                    })
                                    :
                                    null
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;