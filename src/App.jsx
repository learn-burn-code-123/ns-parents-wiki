import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BabysittingAndDayCare from './pages/BabysittingAndDayCare'
import PlaygroundsAndPools from './pages/PlaygroundsAndPools'
import Attractions from './pages/Attractions'
import Sports from './pages/Sports'
import Groceries from './pages/Groceries'
import PediatricClinics from './pages/PediatricClinics'
import Courses from './pages/Courses'
import Schools from './pages/Schools'
import About from './pages/About'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/babysitting-and-day-care" element={<BabysittingAndDayCare />} />
          <Route path="/playgrounds-and-pools" element={<PlaygroundsAndPools />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/pediatric-clinics" element={<PediatricClinics />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
