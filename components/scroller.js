import React from 'react'
import Marquee from 'react-fast-marquee'

function Scroller({text}) {
  return (
    <section>
        <Marquee gradient={false} pauseOnHover={false} speed={15} className='my-4 bg-primary border-y-2 border-secondary py-2 font-bold text-xl md:text-2xl text-secondary'>
        {text}
        </Marquee>
    </section>
  )
}

export default Scroller