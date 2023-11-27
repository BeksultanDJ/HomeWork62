import React from "react";

interface Props {
    changeLocation: (location: string) => void;
}

const Toolbar: React.FC<Props> = ({ changeLocation }) => {
    return (
        <>
            <nav>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={() => changeLocation('home')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contacts</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Toolbar;
