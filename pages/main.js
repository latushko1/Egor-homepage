import React from 'react'
import { motion } from 'framer-motion'


function Main() {
  return (
    
    <div>
        <div className='min-h-screen border-b-2 border-black grid place-items-center uppercase'>
            <div className='container'>
                <motion.h1 
                    initial={{
                        y: -50,
                        opacity:0,
                    }}
                    animate={{
                        y: 0,
                        opacity:1,
                        }}
                    transition={{ duration: 0.5 }}
                className='text-black text-5xl uppecase font-bold lg:text-9xl text-right'>
                    Digital Artist <span>Designer,</span> & Developer, <br/> from <br/> russia
                </motion.h1>
            </div>
        </div>

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
        id='about' className='min-h-screen border-b-2 border-black grid place-items-center '>
            <h3 className='container text-black text-6xl uppercase font-bold lg:text-9xl text-right'>
                About me
            </h3>

            
            <p className='container text-xl'>
            I am a third year student in information security at the Technological College of Omsk. I&apos;m also self-taught, I&apos;m very interested in frontend and backend development. I&apos;m very interested in creating things related to technology and art. I enjoy learning on platforms that help me improve my skills, such as:
            </p>

            <span className='container text-lg uppercase font-italic'>
                FreeCodeCamp / Academia X / TheOdinProject
            </span>
            
        </motion.div>
    </div>
  )
}

export default Main