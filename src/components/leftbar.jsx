import React from 'react';
import { NavLink } from "react-router-dom";

function Leftbar() {
    return(
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse">
          <div className="position-sticky pt-3 sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink  className="nav-link gap-3 " to="/dashboard">
                    <i className="bi bi-house-door-fill"></i> <span className='w-100'>Dashboard</span> 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link gap-3 " to="/distributors"> 
                   <i className="bi bi-bar-chart-line-fill"></i> <span className='w-100'>Distributors</span> 
                    
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link gap-3" to="/users">
                    <i className="bi bi-person-circle"></i> <span className='w-100'>User</span> 
                    
                </NavLink>                  
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link gap-3" to="/appmanagement">
                    <i className="bi bi-phone-fill"></i> <span className='w-100'>App Management</span> 
                </NavLink>  
              </li>  
              <li className="nav-item">
                <NavLink  className="nav-link gap-3" to="/profile">
                    <i className="bi bi-gear-fill"></i> <span className='w-100'>Profile Settings</span> 
                </NavLink>  
              </li> 
              <li className="nav-item">
                <NavLink  className="nav-link gap-3" to="/">
                    <i className="bi bi-box-arrow-left"></i> <span className='w-100'>Logout</span> 
                </NavLink>  
              </li>                   
            </ul>
          </div>
        </nav>
    )
}

export default Leftbar;