import React from 'react';

class Header extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.location.reload();
    }

    render() {
        return (
            <div className="header">
                <h1 onClick={this.handleClick} className="header__title">Nonna</h1>
                <h2 className="header__sub-title">A time honoured recipe collection</h2>
            </div>
        )
    }
}


export default Header;