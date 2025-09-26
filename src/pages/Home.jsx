import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  const links = [
    { to: '/babysitting-and-day-care', label: 'Babysitting & Day Care' },
    { to: '/playgrounds-and-pools', label: 'Playgrounds & Pools' },
    { to: '/attractions', label: 'Attractions' },
    { to: '/sports', label: 'Sports' },
    { to: '/groceries', label: 'Nearby Groceries & Snacks' },
    { to: '/pediatric-clinics', label: 'Pediatric Clinics & Hospitals' },
    { to: '/courses', label: 'Courses' },
    { to: '/schools', label: 'Schools' },
  ]
  return (
    <div className="list">
      <section className="card">
        <h1 className="section-title">Welcome to the NS Parents Wiki</h1>
        <p>A community-maintained wiki for NS parent childcare, family activities, and other childcare essentials near Network School.</p>
      </section>
      <section className="card">
        <h2 className="section-title">Browse</h2>
        <ul>
          {links.map((l)=> (
            <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
          ))}
        </ul>
      </section>
    </div>
  )
}
