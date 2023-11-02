import { activePageInfo } from '../../Reducers/pageReducer';
import { useDispatch, useSelector } from "react-redux";
import { scroller } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SvgIcon from '../BaseComponent/SvgIcons';
import { useEffect, useState } from 'react';
import NavMenu from '../BaseComponent/NavBarMenu';
import { menuOpen } from "../../Reducers/pageReducer";

const Header = (
    {
        headerData
    }
) => {

    const my_header = headerData && headerData.type === 'header' ? headerData?.menus : [];
    const dispatch = useDispatch();
    const [color, setColor] = useState('light');
    const [open, setOpen] = useState(false);
    const selector = useSelector(state => state.pageReducer);
    const open_menu = selector?.menu_open;
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
    const onColorChange = (e) => {
        const body = document.body;
        const para = document.querySelectorAll('p');
        if (color === 'light') {
            body.style.backgroundColor = 'black';
            setColor('dark');
            para.forEach(data => {
                data.style.color = 'white';
            })
        }
        else {
            body.style.backgroundColor = 'white';
            setColor('light');
            para.forEach(data => {
                data.style.color = 'black';
            })
        }
    }
    const menuOpneHandler = (e) => {
        const nameValue = e.target.getAttribute('name');
        if (nameValue == 'menu') {
            dispatch(menuOpen(true));
            setOpen(true);
        }
        else {
            dispatch(menuOpen(false));
            setOpen(false);
        }
    }
    useEffect(()=>{
        open_menu ? setOpen(true) : setOpen(false);
    },[open,open_menu])

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md">
                    <div className="container navbar_sticky">
                        <a className="logo" href="#">
                            <p className='three_d m-0'>
                                <span className="letter text-danger">D</span>
                                <span className="letter text-success">H</span>
                                <span className="letter text-primary">E</span>
                                <span className="letter text-warning">N</span>
                                <span className="letter text-info">E</span>
                                <span className="letter text-orange">S</span>
                                <span className="letter text-sky">H</span>
                            </p>
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
                        <div className='d-md-none'>
                            <SvgIcon
                                iconType={`${color == 'dark' ? 'light' : 'dark'}`}
                                className={'text-dark'}
                                onClickHandler={(e) => onColorChange(e)}
                                value={color}
                            />
                            <span className='px-1'>
                                <SvgIcon
                                    iconType={(open && open_menu) ? 'close' : 'menu'}
                                    name={(open) ? 'close' : 'menu'}
                                    className={'text-dark'}
                                    onClickHandler={(e) => menuOpneHandler(e)}
                                />
                            </span>
                        </div>
                        {
                            (open && open_menu) ?
                                <NavMenu
                                    menuData={headerData?.menus}
                                />
                                :
                                null
                        }

                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;