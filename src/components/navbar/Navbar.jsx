import React, { useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menus = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menus />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ?
          <Close style={{ color: "#fff" }} onClick={() => setToggleMenu(false)} />
          : <Menu style={{ color: "#fff" }} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menus />
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar