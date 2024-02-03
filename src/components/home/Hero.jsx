import React from 'react'

function Hero() {
    return (
        <div>
            <div className="my-16 tracking-tigher ">
                <p className="mb-8 text-3xl font-semibold leading-10">Hello, my name is Dan. I'm a <span className='text-red-500 dark:text-red-400'>software and web developer.</span> </p>
                <div className="text-stone-800 dark:text-stone-400 text-justify">
                    <p className="leading-6">I'm a law graduate and have been an indie developer for <span className='font-semibold text-red-500 dark:text-red-400'>over 10 years</span>. I enjoy creating intuitive digital experiences that are as engaging as they are seamless. </p>
                    <p className='mt-4'> Since 2018, while at university, I have been focused on using modern web technologies, starting with full-stack applications developed in Laravel before moving to <span className='text-red-500 dark:text-red-400 font-semibold'>responsive, design-led, frontend projects</span> in Vue and React. I have been building my experience in Node.js as a lightweight backend and proxy for these projects.</p>
                    <p className='mt-4'> During all of this I have also been exploring <span className='text-red-500 dark:text-red-400 font-semibold'>native and cross-platform software development</span> in frameworks that interest me, like Swift and Flutter.</p>
                    <p className='mt-4'>Let's work together!</p>
                </div>
            </div>

        </div>
    )
}

export default Hero