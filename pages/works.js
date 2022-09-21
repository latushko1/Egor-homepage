import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioData } from '../data'
import { motion } from 'framer-motion'

function Works() {
  return (
    <motion.div
    initial={{ 
        opacity: 0,
        y:-30 }}
        whileInView={{ 
        opacity: 1,
        y:0,
        }}
        viewport={{
            amount:0.1,
            once: true,
        }}
    id='works'>
        <h1 className='container text-secondary text-6xl uppercase font-bold lg:text-9xl text-right my-12'>
                    works.
        </h1>
        <div className='text-secondary min-h-screen border-b-2 border-secondary pb-12'>
            <div className='container grid mt-3 md:grid-cols-2 gap-5'>
                {portfolioData.map((item)=>(
                    <div key={item.id} className='border-b-2 border-secondary'>
                    <div className='pt-2'>
                        <h1 className='text-secondary text-4xl uppercase font-semibold  mt-3'>
                            {item.title}
                        </h1>

                        <Link href={item.link}>
                            <a>
                                Visit
                            </a>
                        </Link>
                    </div>
                    <div className='flex gap-2 pb-2  mt-3'>
                            <Image src={item.thumbnail} size='3rem' />
                            <h3 className='font-bold text-xl uppercase'>
                                {item.des1} <br /> {item.des2}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>


      
    </motion.div>
  )
}

export default Works