import React from 'react'
import Link from 'next/link'
import Section from '@/components/home/Section'

function Contact() {
    return (
        <Section title="Contact" subtitle="Let's get in touch">
            <div className='flex-col h-full space-y-4 '>

                <div className='w-3/4 p-4 bg-zinc-800 rounded-e-3xl rounded-t-3xl'>Hey there 👋🏻, thanks for checking out the site! Get in touch:</div>
                <div className='w-3/4 p-4 bg-zinc-800 rounded-e-3xl rounded-t-3xl'>
                    You can get in touch with me at any of the below:
                    <ul className='px-8 mt-2 space-y-1 list-disc'>
                        <li>X/Twitter &#8212; <a className="underline" href="https://twitter.com/danielgrhm">@danielgrhm</a></li>
                        <li>GitHub &#8212; <a className="underline" href="https://github.com/dangraham99">dangraham99</a></li>
                        <li>LinkedIn &#8212; <a className="underline" href="https://www.linkedin.com/in/daniel-graham-bto/">Daniel Graham</a></li>
                        <li>Email &#8212; <a className="underline" href="mailto://contact@danielgm.com">contact@danielgm.com</a></li>
                    </ul>

                </div>


            </div>
        </Section>


    )
}

export default Contact