import React from 'react'

function Hero() {
    return (
        <div>
            <div className="my-16 tracking-tigher ">
                <div className='mb-8 text-4xl font-semibold leading-10'>
                    <p className="">Daniel Graham</p>
                    <p className="text-stone-500 dark:text-stone-500">Software and web developer</p>
                </div>
                <div className="text-stone-700 dark:text-stone-400 text-justify">
                    <p className="leading-6">I'm a law graduate and have been an indie developer for <span className='font-semibold text-stone-900 dark:text-stone-100'>over 10 years</span>. I enjoy creating intuitive digital experiences that are as engaging as they are seamless. </p>
                    <p className='mt-4'> Since 2018, while at university, I have been focused on using modern web technologies, starting with full-stack applications developed in Laravel before moving to <span className='text-stone-900 dark:text-stone-100 font-semibold'>responsive, design-led, frontend projects</span> in Vue and React. I have been building my experience in Node.js as a lightweight backend and proxy for these projects.</p>
                    <p className='mt-4'> During all of this I have also been exploring <span className='text-stone-900 dark:text-stone-100 font-semibold'>native and cross-platform software development</span> in frameworks that interest me, like Swift and Flutter.</p>
                    <p className='mt-4'>Let's work together!</p>
                </div>
            </div>

        </div>
    )
}

export default Hero