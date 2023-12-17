import React, { useState } from 'react';

function MyComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <h1>BMW B58 Engine</h1>
                <img 
                    id="sidebarToggle" 
                    src="images/menu_icon.gif" 
                    alt="Toggle Sidebar"
                    style={{ width: '8%', height: '6%', position: 'fixed', right: '20px', top: '25px', cursor: 'pointer' }}
                    onClick={toggleMenu}
                />
            </header>

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