import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.header
    initial={{
        y: -50,
        opacity:0,
    }}
    animate={{
        y: 0,
        opacity:1,
        }}
    transition={{ duration: 0.5 }}
    className='grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-2 border-black bg-primary'>

        <Link href='/'>
            <a className='flex align-middle items-center border-black border-r-2 justify-center py-4 text-xl uppercase font-bold'>
                Latushko 1
            </a>
        </Link>

        <Link href='links'>
            <a className='md:col-start-3 md:border-l-2 border-black flex gap-2 text-lg justify-center items-center
            bg-primary hover:bg-yellow-500 ease-in-out duration-100 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            Let&apos;s Talk
            </a>
        </Link>

        <nav className='col-span-2
         md:row-start-1 md:col-start-2 md:col-end-3
         border-t-2 border-black flex items-center justify-center md:border-t-0'>

            <ul className='flex gap-6 max-w-sm overflow-auto
            snap-always p-4 text-lg'>
                <li>
                    <Link href='/'>
                        <a className='text-black'>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='#about'>
                        <a className='text-black'>
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='#works'>
                        <a className='text-black'>
                            Works
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a className='text-black'>
                            Links
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    </motion.header>
  )
}

export default Header