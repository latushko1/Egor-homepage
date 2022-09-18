import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='grid grid-cols-2 md:grid-cols-[180px_1fr_180px] bg-primary'>
        <Link href='#links'>
            <a className='text-secondary flex align-middle items-center border-secondary border-r-2 justify-center py-4 text-xl uppercase font-bold'>
                Latushko 1
            </a>
        </Link>

        <Link href='#links'>
            <a className='text-secondary md:col-start-3 md:border-l-2 border-secondary flex gap-2 text-lg justify-center items-center
            bg-primary hover:bg-secondary hover:text-primary ease-in-out duration-100'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
              Let&apos;s Talk
            </a>
        </Link>

        <div className='text-secondary col-span-2
        md:row-start-1 md:col-start-2 md:col-end-3
        border-t-2 border-secondary flex items-center justify-center md:border-t-0 p-4 text-center text-xl uppercase font-bold'>
            &copy; 2022 Latushko Egor
        </div>



        </footer>
    </div>
  )
}

export default Footer