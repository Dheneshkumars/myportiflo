import { useEffect, useState } from "react";
import "./App.css";
import AppComponent from "./Components/GroupComponent/AppComponent";
import schema from "./schema.json";
import preloader from "./images/loader.gif";
import { useDispatch } from "react-redux";
import { schemaData } from "./Reducers/schemaReducer";

function App() {
    const [loader, setLoader] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 2000);

        dispatch(schemaData(schema));

        // Cleanup timeout
        return () => clearTimeout(timer);
    }, [dispatch]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    return (
        <div className="App">
            {loader ? (
                <div className="pre-load">
                    <img src={preloader} alt="Loading..." />
                </div>
            ) : (
                <>
                    <AppComponent schema={schema} />
                    {showScrollTop && (
                        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                            ↑
                        </button>
                    )}
                </>
            )}
        </div>
    );
}

export default App;
