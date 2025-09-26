import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <NavLink to="/" end className={({isActive})=> isActive? 'active':''}>
            <strong>NS Parents Wiki</strong>
          </NavLink>
          <NavLink to="/babysitting-and-day-care">Babysitting</NavLink>
          <NavLink to="/playgrounds-and-pools">Playgrounds</NavLink>
          <NavLink to="/attractions">Attractions</NavLink>
          <NavLink to="/sports">Sports</NavLink>
          <NavLink to="/groceries">Groceries</NavLink>
          <NavLink to="/pediatric-clinics">Pediatric Clinics</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/schools">Schools</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </header>
  )
}
