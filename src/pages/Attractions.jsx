import React from 'react'

export default function Attractions(){
  return (
    <article className="list">
      <header>
        <h1 className="section-title">Attractions</h1>
      </header>
      <section className="card">
        <h2 className="section-title">LEGOLAND® Malaysia</h2>
        <img src="/images/LEGOLAND® Malaysia .png" alt="LEGOLAND Malaysia entrance" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p>Approximately a 15-minute drive / grab car ride from the Marina Hotel, LEGOLAND® Malaysia Resort offers extensive play areas and attractions designed for children of various ages.</p>
        <p>LEGOLAND® Malaysia has three distinct parks: Main Park, Water Park, and Sea Life Park. For kids who are staying for longer periods or who may be returning, the annual pass for all three parks is a cost-effective option.</p>
        <p><strong>Address:</strong> 7, Persiaran Medini Utara 3, 79100 Iskandar Puteri, Johor Darul Ta'zim, Malaysia</p>
        <p><strong>Link:</strong> <a href="https://www.legoland.com.my/" target="_blank" rel="noreferrer">legoland.com.my</a></p>
        <div style={{marginTop: '1rem'}}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4!2d103.6!3d1.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x815b08d21944354b!2sLEGOLAND%20Malaysia!5e0!3m2!1sen!2smy!4v1234567890"
            width="100%" 
            height="300" 
            style={{border: '2px solid #000', borderRadius: '0.5rem'}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="LEGOLAND Malaysia Location">
          </iframe>
        </div>
      </section>
    </article>
  )
}
