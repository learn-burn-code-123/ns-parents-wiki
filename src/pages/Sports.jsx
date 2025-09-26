import React from 'react'

export default function Sports(){
  return (
    <article className="list">
      <header>
        <h1 className="section-title">Sports</h1>
      </header>
      <section className="card">
        <h2 className="section-title">Educity Sports Complex and ESC Arena</h2>
        <p><em>Thanks to Boonsri for the find!</em></p>
        <img src="/images/Educity Sports Complex and ESC Arena 1.png" alt="Educity Sports Complex football program" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <img src="/images/Educity Sports Complex and ESC Arena 2.png" alt="Educity Sports Complex netball program" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <img src="/images/Educity Sports Complex and ESC Arena 3.png" alt="Educity Sports Complex pickleball program" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <img src="/images/Educity Sports Complex and ESC Arena 4.png" alt="Educity Sports Complex badminton program" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p>Educity Sports Complex is a comprehensive sports complex including football (soccer pitch), swimming pool, track, and multipurpose courts for training. Esc Arena is a new sports programme within Educity Sports Complex dedicated to empowering youth sports development.</p>
        <p><strong>Address:</strong> Educity, 81550 Iskandar Puteri, Johor, Malaysia</p>
        <p><strong>Links:</strong></p>
        <p>
          <a href="https://educitysportscomplex.my/arena/" target="_blank" rel="noreferrer">educitysportscomplex.my/arena</a> ·
          {' '}<a href="https://www.instagram.com/p/DIs-v2pvLHM/" target="_blank" rel="noreferrer">Instagram post</a>
        </p>
        <p><strong>Contact:</strong></p>
        <p>+6010 239 0365 · <a href="mailto:esc@36fivex.com">esc@36fivex.com</a></p>
        <div style={{marginTop: '1rem'}}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4!2d103.6!3d1.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcba4b069b67543e2!2sEducity%20Sports%20Complex!5e0!3m2!1sen!2smy!4v1234567890"
            width="100%" 
            height="300" 
            style={{border: '2px solid #000', borderRadius: '0.5rem'}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Educity Sports Complex Location">
          </iframe>
        </div>
      </section>
      <section className="card">
        <h2 className="section-title">EZY Swimming Academy</h2>
        <p><em>Thanks to Boonsri for the find!</em></p>
        <img src="/images/EZY Swimming Academy.png" alt="EZY Swimming Academy programs" style={{width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p>EZY Swimming Academy is founded by Johor's first national swimmer, Ms. Low Xue Ting, and helps children unleash their power in swimming. There are programs for kids of all age groups.</p>
        <p><strong>Address:</strong> Educity Sport Complex, Persiaran Kampus, Educity Iskandar, 81550 Iskandar Puteri, Johor Darul Ta'zim, Malaysia</p>
        <p><strong>Link:</strong> <a href="https://ezyswimmingacademy.my/programs/" target="_blank" rel="noreferrer">ezyswimmingacademy.my/programs</a></p>
        <div style={{marginTop: '1rem'}}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4!2d103.6!3d1.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0ba0046c4f27%3A0xe5cd3d2a3054f33f!2sEZY%20Swimming%20Academy!5e0!3m2!1sen!2smy!4v1234567890"
            width="100%" 
            height="300" 
            style={{border: '2px solid #000', borderRadius: '0.5rem'}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="EZY Swimming Academy Location">
          </iframe>
        </div>
      </section>
    </article>
  )
}
