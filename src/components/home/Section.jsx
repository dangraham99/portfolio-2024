import React from 'react'

function Section(props) {



    return (
        <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 mt-8 border-b border-stone-700'>
            <div class="sticky z-30 top-8 md:w-1/3">
                <h1 className='font-semibold text-xl'>{props.title}</h1>
                <h2 className='uppercase font-semibold text-sm tracking-[.2em] text-stone-500'>{props.subtitle}</h2>
            </div>
            <div class="md:w-2/3">

                {props.children}





            </div>

        </div>
    )
}

export default Section


