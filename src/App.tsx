import './App.css';
import Toolbar from "./componets/Tollbar/Toolbar.tsx";
import {useState} from "react";
import Home from "./componets/container/Home/Home.tsx";

function App() {
    const [location, setLocation] = useState('home');

    let content = null;

    if (location === 'home') {
        content = (
            <Home />
        );
    }

    return (
        <>
            <Toolbar changeLocation={setLocation} />
            <div>
                {content}
            </div>
        </>
    );
}

export default App;