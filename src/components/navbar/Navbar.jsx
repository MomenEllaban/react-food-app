import React from 'react'
import Sidebar from "../sidebar/Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
const Navbar = () => {


  const [showSidebar, setShowSidebar] = useState(false);
  const links = [

    {
      name: "home",
      path: "/",
      icon: faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList
    }, {
      name: "Settings",
      path: "/settings",
      icon: faCog
    }

  ]


function closeSidebar() {
  setShowSidebar(false)
  
}






  return (
    <>
      <div className="navbar container ">
        <a href="#!" className='logo'>F<span>oo</span>diesHub</a>
        <div className='nav-links'>

          {links.map(link => (
            <a href='#!' key={link.name}>{link.name} </a>)
          )


          }

          {/* <a href="#!">Home</a>
    <a href="#!">Recipes</a>
    <a href="#!">Settings</a> */}


        </div>

        <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

      </div>

      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  )
}

export default Navbar
