import { useState } from 'react';
import './App.css';
import AppComponent from './Components/GroupComponent/AppComponent';
import schema from './schema.json';
import preloader from './images/loader.gif';
function App() {
    const [loader,setLoad]= useState(true);
    setTimeout(()=>{
        setLoad(false);
    },2000)
    return (
        <div className="App">
            {
                loader ?
                <div className='pre-load'>
                    <img src={preloader} alt='load'></img>
                </div>
                :
                <AppComponent
                    schema={schema}
                />
            }
        </div>
    );
}

export default App;
