import React from 'react'

function CvEntry(props) {
    return (
        <div className=''>
            <h2 className='font-semibold text-stone-900 dark:text-stone-100'>{props.institution}</h2>
            <div className='mb-8'>
                <div class="flex-col mb-4">
                    <h2 className='font-semibold'>{props.title}<br></br><i>{props.result}</i></h2>
                    <div className="my-2 flex items-center text-stone-700 dark:text-stone-400 text-sm shrink-0 rounded-3xl h-6 w-fit"><span className='uppercase  text-xs tracking-[.2em] '>{props.period}</span></div>
                </div>
                <div className='text-justify text-stone-700 dark:text-stone-400'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default CvEntry