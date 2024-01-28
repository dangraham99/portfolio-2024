import React from 'react'
import Link from 'next/link'
import Section from '@/components/home/Section'

function Contact() {
    return (

        <Section title="Contact" subtitle="Let's get in touch">
            <div className='flex-col mt-12 space-y-4 h-full '>

                <div className='bg-zinc-800 rounded-e-3xl rounded-t-3xl p-4 w-3/4'>Hey there 👋🏻, thanks for checking out the site! Get in touch:</div>
                <div className='bg-zinc-800 rounded-e-3xl rounded-t-3xl p-4 w-3/4'>
                    You can get in touch with me at any of the below:
                    <ul className='list-disc mt-2 space-y-1 px-8'>
                        <li>X/Twitter &#8212; <a className="underline" href="https://twitter.com/dangrahm">@danielgrhm</a></li>
                        <li>GitHub &#8212; <a className="underline" href="https://github.com/dangraham99">dangraham99</a></li>
                        <li>LinkedIn &#8212; <a className="underline" href="https://www.linkedin.com/in/daniel-graham-bto/">Daniel Graham</a></li>
                        <li>Email &#8212; <a className="underline" href="mailto://contact@danielgrhm">contact@danielgrhm</a></li>
                    </ul>

                </div>


            </div>
        </Section>

    )
}

export default Contact