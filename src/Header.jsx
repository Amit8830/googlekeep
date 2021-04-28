import React from 'react'
import logo from './Image/logo.png'

const Header = () => {

    return (
        <div className='header' >
            <img src={logo} alt="logo" width='80' height='70' />
            <h1>Google's Keep</h1>
        </div>
    )
}

export default Header;
