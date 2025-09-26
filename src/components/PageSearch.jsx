import React from 'react'

export default function PageSearch({ onChange }){
  return (
    <div style={{marginBottom: '1rem'}}>
      <label className="kicker" htmlFor="filter">Filter this page</label>
      <input id="filter" type="search" placeholder="Type to filter..." onChange={e=>onChange(e.target.value)} />
    </div>
  )
}
