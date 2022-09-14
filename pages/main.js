import React from 'react'


function Main() {
  return (
    
    <div>
        <div className='min-h-screen border-b-2 border-black grid place-items-center'>
            <div className='container'>
                <h1 className='text-black text-6xl uppecase font-bold lg:text-9xl text-right  '>
                    Creative <span>desing,</span> & develop, <br/> russia
                </h1>
            </div>
        </div>

        <div id='about' className='min-h-screen border-b-2 border-black grid place-items-center '>
            <h3 className='container text-black text-6xl uppercase font-bold lg:text-9xl text-right'>
                About me
            </h3>

            
            <p className='container text-xl'>
            I am a third year student in information security at the Technological College of Omsk. I&apos;m also self-taught, I&apos;m very interested in frontend and backend development. I&apos;m very interested in creating things related to technology and art. I enjoy learning on platforms that help me improve my skills, such as:
            </p>

            <span className='container text-lg uppercase font-italic'>
                FreeCodeCamp / Academia X / TheOdinProject
            </span>
            
        </div>
    </div>
  )
}

export default Main