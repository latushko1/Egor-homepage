import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Links() {
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
            amount:0.5
        }}

    id='links' className='border-b-2 border-black'>
        <h1 className='container text-black text-6xl uppercase font-bold lg:text-9xl text-right mt-12'>
                    links.
                </h1>
        <div className='container mt-10 mr-10 min-h-[80vh]'>
            <ul>
                <li>
                    <Link href='https://www.pinterest.com/latushko1/'>
                        <a className='text-xl uppercase font-bold hover:underline'>
                            Instagram
                        </a>
                    </Link>
                    
                   <li>
                    <Link href='https://vk.com/latushko1'>
                            <a className='text-xl uppercase font-bold hover:underline'>
                                VK
                            </a>
                        </Link>
                   </li>

                   <li>
                    <Link href='https://github.com/latushko1/'>
                            <a className='text-xl uppercase font-bold hover:underline'>
                                github
                            </a>
                        </Link>
                   </li>
                </li>
            </ul>
        </div>


      
    </motion.div>
  )
}

export default Links