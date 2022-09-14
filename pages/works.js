import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Miratex} from '../src/files'
import { portfolioData } from '../data'

function Works() {
  return (
    <div id='works'>
        <h1 className='container text-black text-6xl uppercase font-bold lg:text-9xl text-right my-12'>
                    works.
        </h1>
        <div className='min-h-screen border-b-2 border-black pb-12'>
            <div className='container grid mt-3 md:grid-cols-2 '>
                {portfolioData.map((item)=>(
                    <>
                    <div>
                        <h1 className='text-black text-4xl uppercase font-semibold  mt-3'>
                            {item.title}
                        </h1>

                        <Link href={item.link}>
                            <a>
                                Visit
                            </a>
                        </Link>
                    </div>
                    <div className='flex gap-2  mt-3'>
                            <Image src={item.thumbnail} size='3rem' />
                            <h3 className='font-bold text-xl uppercase'>
                                {item.des1} <br /> {item.des2}
                            </h3>
                        </div>
                    </>
                ))}
            </div>
        </div>


      
    </div>
  )
}

export default Works