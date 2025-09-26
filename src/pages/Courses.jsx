import React from 'react'

export default function Courses(){
  return (
    <article className="list">
      <header>
        <h1 className="section-title">Courses</h1>
      </header>
      <section className="card">
        <h2 className="section-title">AlphaKis EDU</h2>
        <img src="/images/AlphaKis EDU 1.png" alt="AlphaKis EDU courses overview" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <img src="/images/AlphaKis EDU 2.png" alt="AlphaKis EDU promotional poster" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p><strong>Location:</strong> No 4A, Jalan Eko Botani 3/6, Taman Eko Botani, 79100 Iskandar Puteri</p>
        <p>STEAM education for ages 6–17 with flexible schedules.</p>
        <div style={{marginTop: '1rem'}}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4!2d103.6!3d1.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0ba0046c4f27%3A0xe5cd3d2a3054f33f!2sNo%204A%2C%20Jalan%20Eko%20Botani%203%2F6%2C%20Taman%20Eko%20Botani%2C%2079100%20Iskandar%20Puteri!5e0!3m2!1sen!2smy!4v1234567890"
            width="100%" 
            height="300" 
            style={{border: '2px solid #000', borderRadius: '0.5rem'}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="AlphaKis EDU Location">
          </iframe>
        </div>
      </section>
    </article>
  )
}
