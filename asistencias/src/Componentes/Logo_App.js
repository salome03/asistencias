import React from 'react';
import ImgLogo from './Img/Logo_App.png';

const LogoApp = () => {
    return(
        <div className='logo'>
             <a href='#'><img src={ImgLogo}></img></a>
        </div>
    )
}
export default LogoApp;