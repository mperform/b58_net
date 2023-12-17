import React, { useState } from 'react';

function MyComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <> 
            <div className={`sidebar ${isMenuOpen ? 'sidebar-open' : ''}`} id="main_menu">
                <ul>
                    <li><a href="about.html">About the engine</a></li>
                    <li><a href="exterior.html">Exterior Modifications</a></li>
                    <li><a href="interior.html">Interior Modifications</a></li>
                    <li><a href="customize.html">Customize your B58!</a></li>
                </ul>
            </div>
        </>
    );
}
 
export default MyComponent;