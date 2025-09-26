import React from 'react'

export default function Groceries(){
  return (
    <article className="list">
      <header>
        <h1 className="section-title">Nearby Groceries & Snacks</h1>
      </header>
      <section className="card">
        <h2 className="section-title">Siang Tai Grocer</h2>
        <p>Downstairs in the Marina Hotel corridor: ice cream, cookies, toys.</p>
        <div style={{marginTop: '1rem'}}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4!2d103.6!3d1.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf764a6c4870c3a03!2sSiang%20Tai%20Grocer%20%E7%A5%A5%E6%B3%B0%E8%B6%85%E5%B8%82!5e0!3m2!1sen!2smy!4v1234567890"
            width="100%" 
            height="300" 
            style={{border: '2px solid #000', borderRadius: '0.5rem'}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Siang Tai Grocer Location">
          </iframe>
        </div>
      </section>
      <section className="card">
        <h2 className="section-title">Grab Mart</h2>
        <img src="/images/Grab.png" alt="Grab delivery service" style={{width: '100%', maxWidth: '300px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p>Use the Grab app for same-hour delivery to the Marina Hotel or apartment.</p>
      </section>
      <section className="card">
        <h2 className="section-title">Lazada / Shopee</h2>
        <p>Order essentials (e.g., diapers, clothing). Typical delivery: 3–4 days to hotel/apartment.</p>
      </section>
    </article>
  )
}
