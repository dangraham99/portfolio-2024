import React from 'react'

function CvEntry(props) {
    return (
        <div className=''>
            <h2 className='font-semibold text-red-400'>{props.institution}</h2>
            <div className='mb-8'>
                <div class="flex justify-between mb-4">
                    <h2 className='font-semibold'>{props.title}<br></br><i>{props.result}</i></h2>
                    <h2>{props.period}</h2>
                </div>
                <div className='text-justify text-stone-400'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default CvEntry