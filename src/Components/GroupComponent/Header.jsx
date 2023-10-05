import { activePageInfo } from '../../Reducers/pageReducer';
import { useDispatch, useSelector } from "react-redux";
import { scroller } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = (
    {
        headerData
    }
) => {

    const my_header = headerData && headerData.type === 'header' ? headerData?.menus : [];
    const dispatch = useDispatch();
    const selector = useSelector(state => state.pageReducer);
    const activeInfo = selector?.activepage;
    const handleOnclick = (e) => {
        if (e !== '') {
            dispatch(activePageInfo(e));
            scroller.scrollTo(`page_${e}`, {
                duration: 300,
                delay: 0,
                smooth: true,
                offset: -150,
            })
        }
    }
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container navbar_sticky">
                        <a className="logo" href="#">
                            <span className="text-danger">D</span>
                            <span className="text-success">H</span>
                            <span className="text-primary">E</span>
                            <span className="text-warning">N</span>
                            <span className="text-info">E</span>
                            <span className="text-orange">S</span>
                            <span className="text-sky">H</span>
                        </a>
                        <div className="nav-menu" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                {my_header &&
                                    Array.isArray(my_header) &&
                                    my_header.map((data, index) => {
                                        return (
                                            <li className={`nav-item`} key={index} onClick={() => handleOnclick(data)}>
                                                <a
                                                    className={`nav-link px-lg-4  ${activeInfo.toLowerCase() == data.toLowerCase() ? "higlight" : ""}`}
                                                    href={`#${activeInfo}`}
                                                    name={data}
                                                >
                                                    {data}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;