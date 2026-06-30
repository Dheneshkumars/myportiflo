import { PureComponent } from "react";
import Header from "../GroupComponent/Header";
import Home from "../GroupComponent/Home";
import About from "../GroupComponent/About";
import Skill from "../GroupComponent/Skill";
import Education from "../GroupComponent/Education";
import Experince from "../GroupComponent/Experience";
import Contact from "../GroupComponent/Contacts";
import { scroller } from 'react-scroll';
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
        this.mutationObserver = null;
        this._onScroll = null;
        this._onResize = null;
        this._onLoad = null;
    }

    componentWillUnmount() {
        try {
            if (this.observer) { this.observer.disconnect(); this.observer = null; }
            if (this.mutationObserver) { this.mutationObserver.disconnect(); this.mutationObserver = null; }
            if (this._onScroll) { document.removeEventListener('scroll', this._onScroll); }
            if (this._onResize) { window.removeEventListener('resize', this._onResize); }
            if (this._onLoad) { window.removeEventListener('load', this._onLoad); }
            if (this.headerScrollHandler) { window.removeEventListener('scroll', this.headerScrollHandler); }
        } catch (e) { }
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
        if (currentUrl) {
            scroller.scrollTo(`page_${currentUrl}`, {
                duration: 300,
                delay: 0,
                smooth: true,
                offset: -150,
            });
        }

        const container = document.getElementsByTagName('section');
        const customOffset = 300;

        // active page logic (saved for cleanup)
        this._onScroll = () => {
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
            document.addEventListener('scroll', this._onScroll, { passive: true });
        }

        // reveal observer setup with immediate viewport fallback and stagger
        const baseDelay = 80; // ms between items for stagger

        const createObserver = () => {
            if (this.observer) return;
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        try { this.observer.unobserve(entry.target); } catch (e) { }
                    }
                });
            }, {
                root: null,
                rootMargin: '0px 0px -120px 0px',
                threshold: 0.12
            });
        };

        this.observeHiddenElements = () => {
            const elements = document.querySelectorAll('.hide');
            if (!elements || elements.length === 0) return;

            createObserver();

            Array.from(elements).forEach((el, idx) => {
                const dataDelay = el.dataset && el.dataset.delay ? parseInt(el.dataset.delay, 10) : null;
                const delay = (dataDelay !== null && !isNaN(dataDelay)) ? dataDelay : (idx * baseDelay);
                try { el.style.transitionDelay = `${delay}ms`; } catch (e) { }

                // child staggering
                if (el.dataset && el.dataset.stagger === 'children') {
                    const children = Array.from(el.children || []);
                    children.forEach((child, cidx) => {
                        const childDelay = delay + (cidx * baseDelay);
                        try { child.style.transitionDelay = `${childDelay}ms`; } catch (e) { }
                    });
                }

                // immediate visibility fallback: if element already in viewport, reveal immediately
                const rect = el.getBoundingClientRect();
                const inViewport = rect.top < (window.innerHeight - 40) && rect.bottom > 0;
                if (inViewport) {
                    el.classList.add('show');
                } else {
                    try { this.observer.observe(el); } catch (e) { }
                }
            });
        };

        // initial observe pass + follow-up for late content
        this.observeHiddenElements();
        setTimeout(() => this.observeHiddenElements(), 220);

        // MutationObserver to catch dynamically added elements
        this.mutationObserver = new MutationObserver(() => this.observeHiddenElements());
        this.mutationObserver.observe(document.body, { childList: true, subtree: true });

        // ensure we re-run on resize/load
        this._onResize = () => this.observeHiddenElements();
        this._onLoad = () => this.observeHiddenElements();
        window.addEventListener('resize', this._onResize, { passive: true });
        window.addEventListener('load', this._onLoad);

        // header scroll state toggle saved so it can be removed later
        const header = document.querySelector('header');
        this.headerScrollHandler = () => {
            if (!header) return;
            header.classList.toggle('scrolled', window.scrollY > 0);
        };
        if (header) {
            this.headerScrollHandler();
        }
        window.addEventListener("scroll", this.headerScrollHandler, { passive: true });
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
                }
            }

            return components;
        } else {
            return <h3>Error</h3>
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


