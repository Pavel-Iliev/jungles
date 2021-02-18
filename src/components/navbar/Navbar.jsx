import './Navbar.css';
import userIcon from '../../assests/account.svg'
import arrow from '../../assests/arrow-blue.svg';
import { useState } from 'react';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  
  function handleMenu() {
    const head = document.querySelector('.header');
    if (openMenu) {
      head.classList.add('open-menu');
      setOpenMenu(false);
    } else {
      head.classList.remove('open-menu');
      setOpenMenu(true);
    }
  }
  return (
    <>
      <div className="header">
        <div className="container header__wrap disp-flex">
          <div 
            className="menu"
            onClick={handleMenu}
          >
            <span></span>
          </div>
          <div className="wrap__menu">
            <div className="container">
              <ul className="disp-flex">
                <li className="disp-flex"><a href="/">Lorem</a> <img src={arrow} alt="arrow" /></li>
                <li className="disp-flex"><a href="/">Ipsum</a><img src={arrow} alt="arrow" /></li>
                <li className="disp-flex"><a href="/">Dolor</a><img src={arrow} alt="arrow" /></li>
                <li className="disp-flex"><a href="/">Sit</a><img src={arrow} alt="arrow" /></li>
                <li className="disp-flex"><a href="/">Amet</a><img src={arrow} alt="arrow" /></li>
              </ul>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
          <div className="header__user disp-flex">
            <div className="disp-flex header__user-l"><img src={userIcon} alt="user icon" /><span>Login</span></div>
            <button className="btn btn-blue">Offerte</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;