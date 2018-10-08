import React from 'react';

function Header() {
    function handleClick(){
        window.location.reload();
    }

    return (
        <div className="header">
                <h1 onClick={handleClick} className="header__title">Nonna</h1>
                <h2 className="header__sub-title">A time honoured recipe collection</h2>
            </div>
    )
}

export default Header;