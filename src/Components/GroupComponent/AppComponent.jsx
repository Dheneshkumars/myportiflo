import { PureComponent } from "react";
import Header from "../GroupComponent/Header";
import Home from "../GroupComponent/Home";
import About from "../GroupComponent/About";
import Skill from "../GroupComponent/Skill";
import Education from "../GroupComponent/Education";
import Experince from "../GroupComponent/Experience";
import Contact from "../GroupComponent/Contacts";
import { scroller } from 'react-scroll';
import NavMenu from "../BaseComponent/NavBarMenu";
import { activePageInfo } from "../../Reducers/pageReducer";
import { connect } from "react-redux";

class AppComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            activePage: "",
        };
        this.elementsToObserve = null;
        this.observer = null;
    }

    static getDerivedStateFromError(error) {
        console.log("calling getDerivedStateFromError from AppLayout", error);
        return error ? { hasError: true, isLoading: false } : { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        console.log("calling componentDidCatch from AppLayout", error, errorInfo);
        this.setState({ hasError: true, isLoading: false });
    }

    componentDidMount() {
        const currentUrl = window.location.hash.substring(1);
        if (currentUrl !== undefined && currentUrl !== null) {
            scroller.scrollTo(`page_${currentUrl}`, {
                duration: 300,
                delay: 0,
                smooth: true,
                offset: -150,
            });
        }

        const container = document.getElementsByTagName('section');
        const customOffset = 300;

        const onScrollHandle = () => {
            for (let section of container) {
                const id = section && section.id;
                if (id) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    const isSectionActive =
                        window.scrollY > sectionTop - customOffset &&
                        window.scrollY < sectionBottom - customOffset;

                    if (isSectionActive) {
                        let activePageIndex = id.indexOf('_');
                        let activePage = id.substring(activePageIndex + 1);
                        this.props.activePage(activePage);
                    }
                }
            }
        };

        if (container.length > 0) {
            document.addEventListener('scroll', onScrollHandle);
        }
        //  scroll animation
        this.elementsToObserve = document.querySelectorAll('.hide');
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    this.observer.unobserve(entry.target);
                }
                else {
                    entry.target.classList.remove('show');
                }
            })
        },
            {
                // threshold: 1
            }
        )
        this.elementsToObserve.forEach((element) => {
            this.observer.observe(element);
        });
    }



    render() {
        const portifloDataArray = this.props && this.props.schema && Object.keys(this.props.schema);
        if (Array.isArray(portifloDataArray) && portifloDataArray.length > 0) {
            const components = [];

            for (let data of portifloDataArray) {
                switch (data) {
                    case 'header':
                        components.push(
                            <Header
                                headerData={this.props.schema[data]}
                                key={data}
                            />
                        );
                        break;
                    case 'home':
                        components.push(
                            <Home
                                data={this.props.schema[data]}
                                key={data}
                            />
                        );
                        break;
                    case 'about':
                        components.push(
                            <About
                                aboutData={this.props.schema[data]}
                                key={data}
                            />
                        );
                        break;
                    case 'skill':
                        components.push(
                            <Skill
                                skillData={this.props.schema[data]}
                                key={data}
                            />
                        );
                        break;
                    case 'education':
                        components.push(
                            <Education
                                educationData={this.props.schema[data]}
                                key={data}
                            />
                        );
                        break;
                    case 'experience':
                        components.push(
                            <Experince
                                experienceData={this.props.schema[data]}
                                key={data}
                            />
                        );
                        break;
                    case 'contact':
                        components.push(
                            <Contact
                                contactData={this.props.schema[data]}
                                key={data}
                            />
                        );
                        break;
                    case 'menu':
                        components.push(
                            <NavMenu
                                key={data}
                                menuData={this.props.schema[data]}
                            />
                        )
                }
            }

            return components;
        } else {
            return <h3>hii</h3>
        }

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        activePage: (data) => {
            dispatch(activePageInfo(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(AppComponent)


