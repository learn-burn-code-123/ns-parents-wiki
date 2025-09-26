import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        Last updated: <time>{new Date().toLocaleDateString()}</time>
      </div>
    </footer>
  )
}
