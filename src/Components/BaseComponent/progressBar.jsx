import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProgressBar = ({
    text,
    percent,
    id
}) => {
    const selector = useSelector(state=>state?.pageReducer);
    const activePage = selector && selector.activepage;
    const elements = document.getElementsByClassName(`${text}-fill`);
    useEffect(() => {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.width = `${percent}%`;
            if(element.style.width < '80%'){
                element.style.backgroundColor = 'blue';
            }
            if(element.style.width > '90%' && element.style.width > '80%'){
                element.style.backgroundColor ='green';
            }
        }
    }, [])
   
    
    return (
        <div className="skill-bar my-3" id={id}>
            <div className="skill-level">
                <div className={`skill-fill ${text}-fill ${activePage == 'Skills' ? "skill_animation" : ""}`}>{percent}%</div>
            </div>
        </div>
    )
}

export default ProgressBar;