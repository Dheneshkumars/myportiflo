import { useState } from "react";
import SvgIcon from "./SvgIcons";
import { scroller } from "react-scroll";



const NavMenu = ({
    menuData
}) => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    const handleClickHandler = (data) => {
        if (data) {
            scroller.scrollTo(`page_${data}`, {
                duration: 300,
                delay: 0,
                smooth: true,
                offset: -150,
            })
        }
    }

    return (
        windowDimensions.width < 768 &&
        <>
            <div className="menu-parent px-2 d-md-none">
                <div className="menu-row">
                    {
                        Array.isArray(menuData) && menuData.length > 0 && menuData.map((data, i) => {
                            return (

                                <div className="col-sm-2" key={i}>
                                    <SvgIcon
                                        iconType={data}
                                        onClickHandler={(e) => handleClickHandler(data)}
                                        className={"text-dark"}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default NavMenu;