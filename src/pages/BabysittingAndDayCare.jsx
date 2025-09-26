import React, { useMemo, useState } from 'react'
import PageSearch from '../components/PageSearch'

const items = [
  {
    title: 'Better Things',
    body: (
      <>
        <img src="/images/Better Things.png" alt="Better Things platform" style={{width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p>Jeannette, longtermer at NS, piloted Better Things, an amazing new platform which connects with locals who provide services from childcare to wellness.</p>
        <p>
          <a href="https://betterthings.io/" target="_blank" rel="noreferrer">betterthings.io</a> ·
          {' '}<a href="https://x.com/Betterthingshq" target="_blank" rel="noreferrer">X</a> ·
          {' '}<a href="https://www.instagram.com/betterthingshq" target="_blank" rel="noreferrer">Instagram</a>
        </p>
        <p>Better Things has a Toddler Time at NS offering: {' '}
          <a href="https://home.betterthings.io/Session?id=34" target="_blank" rel="noreferrer">Session #34</a>
        </p>
      </>
    )
  },
  {
    title: 'Kiddocare for Parents',
    body: (
      <>
        <img src="/images/Kiddocare for Parents.png" alt="Kiddocare for Parents mobile app" style={{width: '100%', maxWidth: '300px', height: 'auto', marginBottom: '1rem', border: '2px solid #000', borderRadius: '0.5rem'}} />
        <p>Kiddocare is a local on-demand babysitting platform, connecting parents with trained and vetted Malaysian babysitters (Kiddocarers). Available in Johor Bahru and Forest City.</p>
        <ul>
          <li>Stay-at-Home Babysitting (min. 2 hours)</li>
          <li>Out-of-Home Babysitting (malls, offices, hospitals, events)</li>
          <li>Pop-up Nanny Services (events)</li>
          <li>Special Needs Care (trained babysitters)</li>
        </ul>
        <p>Download the <strong>Kiddocare for Parents</strong> app, open sessions, and set your session.</p>
        <p><strong>Download:</strong> <a href="https://play.google.com/store/apps/details?id=com.kiddocare.customer&hl=en&pli=1" target="_blank" rel="noreferrer">Google Play</a> · <a href="https://apps.apple.com/my/app/kiddocare-for-parents/id1592506713" target="_blank" rel="noreferrer">Apple Store</a></p>
        <p><strong>Link:</strong> <a href="https://kiddocare.my/" target="_blank" rel="noreferrer">kiddocare.my</a></p>
      </>
    )
  },
  {
    title: 'Babysits.my',
    body: (
      <>
        <p>Babysits connects childcare providers to families. Search for babysitters nearby and message them directly.</p>
        <p><em>Field note (July 2025):</em> Search by map, filter for "At the family." Response rate was good; many share WhatsApp to coordinate. Typical rates: 20–25 RM/hour; sometimes add Grab fare. Note: two sitters cancelled last-minute after first use.</p>
        <p><a href="https://www.babysits.my/" target="_blank" rel="noreferrer">babysits.my</a></p>
      </>
    )
  },
  {
    title: 'GreatAuPair',
    body: (
      <>
        <p>Access to vetted nannies, babysitters, and au pairs across Malaysia (incl. Johor Bahru).</p>
        <p><a href="https://www.greataupair.com/Nanny_Service/Find_Nanny/Malaysia.htm" target="_blank" rel="noreferrer">Find caregivers</a></p>
      </>
    )
  },
  {
    title: 'Sitly',
    body: (
      <>
        <p>Large network of sitters in Malaysia; searchable by location and availability.</p>
        <p><a href="https://www.sitly.my/" target="_blank" rel="noreferrer">sitly.my</a></p>
      </>
    )
  },
  {
    title: 'Jia Yi Nanny Services',
    body: (
      <>
        <p>Agency based in Selangor focusing on registered nannies and elderly carers, typically experienced caregivers (Chinese community, ages 50–60). Focused on long-term nanny services (no hourly/monthly options).</p>
        <p><a href="https://www.jiayinannyservice.com/" target="_blank" rel="noreferrer">jiayinannyservice.com</a></p>
      </>
    )
  }
]

export default function BabysittingAndDayCare(){
  const [q,setQ] = useState('')
  const filtered = useMemo(()=> items.filter(i=>
    (i.title+ ' ' + (typeof i.body === 'string'? i.body: '')).toLowerCase().includes(q.toLowerCase())
  ),[q])

  return (
    <article className="list">
      <header>
        <h1 className="section-title">Babysitting & Day Care</h1>
        <PageSearch onChange={setQ} />
      </header>
      {filtered.map((i)=> (
        <section className="card" key={i.title}>
          <h2 className="section-title">{i.title}</h2>
          {i.body}
        </section>
      ))}
    </article>
  )
}
