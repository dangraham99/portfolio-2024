import React from 'react'

function CvEntry(props) {
    return (
        <div className=''>
            <h2 className='font-semibold text-red-500 dark:text-red-400'>{props.institution}</h2>
            <div className='mb-8'>
                <div class="flex xl:justify-between xl:flex-row flex-col mb-4">
                    <h2 className='font-semibold'>{props.title}<br></br><i>{props.result}</i></h2>
                    <div className="my-2 flex items-center bg-zinc-300 dark:bg-zinc-800 px-3 text-sm shrink-0 rounded-3xl h-6 w-fit"><span className='uppercase font-semibold text-xs tracking-[.2em] '>{props.period}</span></div>
                </div>
                <div className='text-justify text-stone-800 dark:text-stone-400'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default CvEntry