import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
          <NavLink to='/' className='side-nav-links' activeClass='active'>
            <p>Home</p>
          </NavLink>
          <div className='side-nav-div'>
            <div><p>PUBLIC</p></div>
            <NavLink to='/Questions' className='side-nav-links' activeClass='active'>
                <img src={Globe} alt='Globe' style={{height:"20px", width:"20px"}}/>
                <p style={{paddingLeft: "10px"}}> Questions</p>
            </NavLink>
            <NavLink to='/Tags' style={{paddingLeft:"40px"}} className='side-nav-links' activeClass='active'>
                <p>Tags</p>
            </NavLink>
            <NavLink to='/Users' style={{paddingLeft:"40px"}} className='side-nav-links' activeClass='active'>
                <p>Users</p>
            </NavLink>
          </div>
        </nav>
    </div>
  )
}

export default LeftSidebar
