import './App.css';
import { Route, Routes } from "react-router-dom";
import Toolbar from "./componets/Tollbar/Toolbar.tsx";
import Home from "./componets/container/Home/Home.tsx";
import AboutUs from "./componets/container/AboutUs/AboutUs.tsx";
import Contacts from "./componets/container/Contacts/Contacts.tsx";


function App() {
    return (
        <div>
            <Toolbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

