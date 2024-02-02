import React from 'react'

function Section(props) {



    return (
        <div className='flex flex-col py-12 space-y-4 border-b md:flex-row md:space-y-0 border-stone-300 dark:border-stone-700'>
            <div class="flex-col md:w-1/3">
                <h1 className='text-xl font-semibold'>{props.title}</h1>
                <h2 className='uppercase font-semibold text-sm tracking-[.2em] text-stone-500'>{props.subtitle}</h2>
            </div>
            <div class="md:w-2/3">

                {props.children}





            </div>

        </div>
    )
}

export default Section


