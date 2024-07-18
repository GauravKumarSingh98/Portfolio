import React, { useRef, useState } from 'react'
import './Navbar.css'
import Gaurav from '../../assets/GAURAV.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }

  return (
    <div className='navbar'>
      <img src={Gaurav} alt='' />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        {/* <li><Link to='*' style={{ textDecoration: 'none', color: 'white' }}><p onClick={() => setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt='' />:<></>}</Link></li> */}
        <li><Link to='/home' style={{ textDecoration: 'none', color: 'black' }}><p onClick={() => setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt='' />:<></>}</Link></li>
        <li><Link to='/about' style={{ textDecoration: 'none', color: 'black' }}><p onClick={() => setMenu("about")}>About Me</p>{menu==="about"?<img src={underline} alt='' />:<></>}</Link></li>
        <li><Link to='/portfolio' style={{ textDecoration: 'none', color: 'black' }}><p onClick={() => setMenu("portfolio")}>Portfolio</p>{menu==="portfolio"?<img src={underline} alt='' />:<></>}</Link></li>
        <li><Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}><p onClick={() => setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt='' />:<></>}</Link></li>
      </ul>
      <div className="nav-connect">
      <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}><p onClick={() => setMenu("contact")}>Connect With Me</p>{menu==="contact"?<img src={underline} alt='' />:<></>}</Link>
      </div>
    </div>
  )
}

export default Navbar
