import { activePageInfo } from '../../Reducers/pageReducer';
import { useDispatch, useSelector } from "react-redux";
import { scroller } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SvgIcon from '../BaseComponent/SvgIcons';
import { useEffect, useState } from 'react';

const Header = (
    {
        headerData
    }
) => {

    const my_header = headerData && headerData.type === 'header' ? headerData?.menus : [];
    const dispatch = useDispatch();
    const [color, setColor] = useState('light');
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
    const onColorChange = (e) => {
        const body = document.body;
        const para = document.querySelectorAll('p');
        console.log(para,"para");
        if (color === 'light') {
            body.style.backgroundColor = 'black';
            setColor('dark');
            para.forEach(data=>{
                data.style.color = 'white';
            })
        }
        else {
            body.style.backgroundColor = 'white';
            setColor('light');
            para.forEach(data=>{
                data.style.color = 'black';
            })
        }
    }
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
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
                        <SvgIcon
                            iconType={`${color == 'dark' ? 'light' : 'dark'}`}
                            className={'text-dark d-md-none'}
                            onClickHandler={(e) => onColorChange(e)}
                            value={color}
                        />
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