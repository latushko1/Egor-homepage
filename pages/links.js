import React from 'react'
import Link from 'next/link'

function Links() {
  return (
    <div id='links' className='border-b-2 border-black'>
        <h1 className='container text-black text-6xl uppercase font-bold lg:text-9xl text-right mt-12'>
                    links.
                </h1>
        <div className='container mt-10 mr-10 min-h-[80vh]'>
            <ul>
                <li>
                    <Link href='/'>
                        <a className='text-xl uppercase font-bold hover:underline'>
                            Instagram
                        </a>
                    </Link>
                    
                   <li>
                    <Link href='/'>
                            <a className='text-xl uppercase font-bold hover:underline'>
                                VK
                            </a>
                        </Link>
                   </li>

                   <li>
                    <Link href='/'>
                            <a className='text-xl uppercase font-bold hover:underline'>
                                github
                            </a>
                        </Link>
                   </li>
                </li>
            </ul>
        </div>


      
    </div>
  )
}

export default Links