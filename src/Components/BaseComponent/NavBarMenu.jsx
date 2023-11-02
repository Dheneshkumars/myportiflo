import { useEffect, useState } from "react";
import SvgIcon from "./SvgIcons";
import { scroller } from "react-scroll";
import { useDispatch } from "react-redux";
import { menuOpen } from "../../Reducers/pageReducer";



const NavMenu = ({
    menuData
}) => {

    const dispatch = useDispatch();
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
        dispatch(menuOpen(false));
    }

    return (
        windowDimensions.width < 768 &&
        <>
            <div className="d-md-none menu_list p-o">
                <ul >
                    {
                        Array.isArray(menuData) && menuData.length > 0 && menuData.map((data, i) => {
                            return (
                                <li className="text-dark d-flex align-items-center justify-content-center my-2" onClick={() => handleClickHandler(data)} key={i}>
                                    <span>{data}</span>
                                    <SvgIcon
                                        iconType={data}
                                        className={"text-dark mx-2"}
                                    />
                                </li>


                            )
                        })
                    }
                </ul>
            </div>
        </>

    )
}

export default NavMenu;