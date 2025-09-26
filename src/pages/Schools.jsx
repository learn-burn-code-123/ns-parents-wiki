import React from 'react'

export default function Schools(){
  return (
    <article className="list">
      <header>
        <h1 className="section-title">Schools</h1>
      </header>
      <section className="card">
        <h2 className="section-title">Forest City International School (FCIS)</h2>
        <img src="/images/Forest City International School (FCIS).png" alt="Forest City International School graduation ceremony" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p>FCIS provides comprehensive education for children aged 3 to 18. With emphasis on the American AP curriculum, the school emphasizes English language development, literacy, and creative expression, preparing children for K-12 progression.</p>
        <p><strong>Address:</strong> 9 Jln Forest City - Lebuhraya Tanjung Pelepas, 81550 Gelang Patah, Johor, Malaysia</p>
        <p><strong>FCIS school admissions and tour contact:</strong> <a href="mailto:ashley.wong@cats-fc.org">ashley.wong@cats-fc.org</a></p>
        <p><strong>School website:</strong> <a href="https://cats-fc.org/" target="_blank" rel="noreferrer">cats-fc.org</a></p>
        <div style={{marginTop: '1rem'}}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4!2d103.6!3d1.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66d64bad93a0830d!2sForest%20City%20International%20School!5e0!3m2!1sen!2smy!4v1234567890"
            width="100%" 
            height="300" 
            style={{border: '2px solid #000', borderRadius: '0.5rem'}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Forest City International School Location">
          </iframe>
        </div>
      </section>
    </article>
  )
}
