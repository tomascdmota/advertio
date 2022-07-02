import React, { useState } from "react";
import './dropdown.css';

function Dropdown() {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [location, setLocation] = useState<String>('Lisbon');
    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={()=> setIsActive(!isActive)}>Choose a Location</div>
            
            {isActive && (
            <div className="dropdown-content">
                <div className="dropdown-item" onClick={()=> setLocation('Lisbon')}>Lisbon</div>
                <div className="dropdown-item" onClick={()=> setLocation('London')}>London</div>
                <div className="dropdown-item" onClick={()=> setLocation('New York')}>New York</div>
            </div>
            
            )}
        </div>
    )
}

export default Dropdown;