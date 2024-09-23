import React,{useState} from "react";
import { Link } from "react-router-dom";


const Menu = () => {
    const [selectedMenu,setSelectedMenu]=useState(0)
    const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false)

    const handleMenuClick = (index) =>{
        setSelectedMenu(index)
    }

    const handleProfileClick = (index) =>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen)
    }

    const menuClass = "menu"
    const activeMenuClass = "menu selected"

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none"}} 
            onClick={() => handleMenuClick(0)}>
            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link to="/Orders" style={{textDecoration:"none"}} 
            onClick={() => handleMenuClick(1)}>
            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/Holdings" style={{textDecoration:"none"}} 
            onClick={() => handleMenuClick(2)}>
            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link to="/Positions" style={{textDecoration:"none"}} 
            onClick={() => handleMenuClick(3)}>
            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link to="/Funds" style={{textDecoration:"none"}} 
            onClick={() => handleMenuClick(4)}>
            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link to="/Apps" style={{textDecoration:"none"}} 
            onClick={() => handleMenuClick(5)}>
            <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile"  onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;

