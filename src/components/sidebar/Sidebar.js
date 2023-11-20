import React from 'react'
import "../../assets/sass/sidebar.scss"
import { SidebarData } from './SidebarData'
import logoMyWarung from "../../assets/images/logo-mywarung.png"

const Sidebar = ({ status }) => {
  const sidebarStyle = {
    transform: status ? 'translateX(0)' : 'translateX(-100%)',
  };

  return (
    <div className={`Sidebar ${status ? 'show' : ''}`} style={sidebarStyle}>
      <img src={logoMyWarung} alt="Logo" onClick={() => { window.location.pathname = "/home" }} className="SidebarLogo" />
      <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className='SidebarRow d-flex flex-row justify-content-center align-items-center text-white'
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link
              }}>

              <div id='icon'>{val.icon}</div>
              <div id='title'>
                {val.title}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar