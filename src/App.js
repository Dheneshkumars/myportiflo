import { useEffect, useState } from "react";
import "./App.css";
import AppComponent from "./Components/GroupComponent/AppComponent";
import schema from "./schema.json";
import preloader from "./images/loader.gif";
import { useDispatch } from "react-redux";
import { schemaData } from "./Reducers/schemaReducer";

function App() {
    const [loader, setLoader] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 2000);

        dispatch(schemaData(schema));

        // Cleanup timeout
        return () => clearTimeout(timer);
    }, [dispatch]);

    return (
        <div className="App">
            {loader ? (
                <div className="pre-load">
                    <img src={preloader} alt="Loading..." />
                </div>
            ) : (
                <AppComponent schema={schema} />
            )}
        </div>
    );
}

export default App;
