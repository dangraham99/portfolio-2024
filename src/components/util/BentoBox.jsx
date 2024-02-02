import React from 'react'

function BentoBox() {
    return (
        <div class="flex flex-wrap">
            <div className='flex w-2/3'>
                <div class="p-6 m-2 h-48 w-full flex rounded-2xl align-bottom items-end bg-zinc-800 text-2xl font-semibold text-red-500 dark:text-red-400"><div>Full-stack web developer</div>         </div>
            </div>
            <div className='flex w-1/3'>
                <div class="p-6 m-2 h-48 w-full flex rounded-2xl align-bottom items-end bg-zinc-800"><div><p class="text-red-500 dark:text-red-400 font-semibold">10+ years </p>indie dev experience </div>         </div>
            </div>
            <div className='flex w-1/3' >
                <div class="p-6 m-2 h-48 w-full flex rounded-2xl align-bottom items-end bg-zinc-800"><div>German <span class="text-red-500 dark:text-red-400">B1</span> </div>         </div>
            </div>

            <div className='flex w-1/3' >
                <div class="p-6 m-2 h-48 w-full flex rounded-2xl align-bottom items-end bg-zinc-800"><div> </div>         </div>
            </div>
            <div className='flex w-1/3' >
                <div class="p-6 m-2 h-48 w-full flex rounded-2xl align-bottom items-end bg-zinc-800 text-sm"><div></div>         </div>
            </div>
            <div className='flex w-full'>
                <div class="p-6 m-2 h-48 w-full flex rounded-2xl align-bottom items-end bg-zinc-800"><div>Hey </div>         </div>
            </div>
        </div>
    )
}

export default BentoBox