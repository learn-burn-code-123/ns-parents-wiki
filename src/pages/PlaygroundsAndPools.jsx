import React from 'react'

export default function PlaygroundsAndPools(){
  return (
    <article className="list">
      <header>
        <h1 className="section-title">Playgrounds & Pools</h1>
      </header>
      <section className="card">
        <h2 className="section-title">On-Site Playground at Forest City Marina Hotel</h2>
        <img src="/images/On-Site Playground at Forest City Marina Hotel.png" alt="Indoor children's playground at Forest City Marina Hotel" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p>The hotel offers a children's playground on the 1st floor near the pool and entrance to the breakfast dining room, plus a children's pool and beachfront.</p>
      </section>
      <section className="card">
        <h2 className="section-title">Forest City Water Park</h2>
        <img src="/images/Forest City Water Park.png" alt="Forest City Water Park with slides and pool" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p>Adjacent to the hotel: public water playground with water slides, splash zones, and interactive features.</p>
        <div style={{marginTop: '1rem'}}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4!2d103.6!3d1.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da09248a6c7865%3A0x2de4d1c83377c9bd!2sForest%20City%20Water%20Park!5e0!3m2!1sen!2smy!4v1234567890"
            width="100%" 
            height="300" 
            style={{border: '2px solid #000', borderRadius: '0.5rem'}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Forest City Water Park Location">
          </iframe>
        </div>
      </section>
    </article>
  )
}
