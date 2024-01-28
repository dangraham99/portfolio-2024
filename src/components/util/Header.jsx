"use client";

import React, { useState, useEffect } from 'react'



function Header() {

    const [isMobileDialogOpen, setIsMobileDialogOpen] = useState(false)


    useEffect(() => {
        if (isMobileDialogOpen) {
            document.body.classList.add("overflow-y-hidden")
        }
        else {
            document.body.classList.remove("overflow-y-hidden")
        }

    }, [isMobileDialogOpen])


    return (
        <span>


            <header className='top-0 z-50 sticky py-4 backdrop-blur-lg mb-12 dark:bg-stone-800 border-b bg-opacity-100 dark:bg-opacity-40 overscroll-contain dark:border-stone-700'>
                <div className='flex justify-between items-center xl:w-1/2 md:w-2/3 md:px-0 px-4 mx-auto'>
                    <h1 className='text-xl shrink-0 font-semibold '>Daniel Graham.</h1>
                    <div className='hidden shrink-0 sm:flex gap-6'>
                        <a className='hover:cursor-pointer stroke-stone-400'>Contact</a>
                        <a className='hover:cursor-pointer  stroke-stone-400'>Blog</a>
                    </div>
                    <svg
                        onClick={() => { setIsMobileDialogOpen(!isMobileDialogOpen) }}
                        xmlns="http://www.w3.org/2000/svg" className="flex shrink-0 sm:hidden h-8 w-8 stroke-stone-400 hover:cursor-pointer" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>


            </header >


            {isMobileDialogOpen &&

                <div onClick={() => { setIsMobileDialogOpen(!isMobileDialogOpen) }} className="fixed top-[4.1rem] z-60 backdrop-blur-2xl mb-12 dark:bg-stone-800  bg-opacity-100 dark:bg-opacity-40  dark:border-stone-700 h-screen w-screen bg-red-500  border-stone-700">

                    <div className="flex-col mt-12 px-8 text-lg">
                        <ul className='space-y-8'>
                            <li>
                                <span className="flex hover:cursor-pointer w-max p-2">
                                    About
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-4 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </span>
                            </li>
                            <li>
                                <span className="flex hover:cursor-pointer w-max p-2">
                                    Blog
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-4 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </span>
                            </li>
                        </ul>



                    </div>

                </div>

            }

        </span >
    )
}



export default Header