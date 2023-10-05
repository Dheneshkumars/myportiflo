import './App.css';
import AppComponent from './Components/GroupComponent/AppComponent';
import schema from './schema.json';
function App() {
    console.log("hhi");
    return (
        <div className="App">
            <AppComponent
                schema={schema}
            />
        </div>
    );
}

export default App;
