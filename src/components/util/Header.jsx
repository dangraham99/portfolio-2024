import React from 'react'

function Header() {
    return (
        <header className='top-0 z-50 sticky py-4 backdrop-blur-lg mb-12 dark:bg-stone-800 border-b bg-opacity-100 dark:bg-opacity-40  dark:border-stone-700'>

            <div className='flex justify-between items-center xl:w-1/2 md:w-2/3 md:px-0 px-4 mx-auto'>
                <h1 className='text-xl shrink-0 font-semibold '>Daniel Graham.</h1>
                <div className='hidden shrink-0 sm:flex gap-6'>
                    <a className='hover:cursor-pointer stroke-stone-400'>Contact</a>
                    <a className='hover:cursor-pointer  stroke-stone-400'>Blog</a>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="flex shrink-0 sm:hidden h-8 w-8 stroke-stone-400 hover:cursor-pointer" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>



        </header>
    )
}

export default Header