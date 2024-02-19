import React from 'react'
import Section from '@/components/util/Section'
import CvEntry from '@/components/cv/CVEntry'

function CV() {
    return (
        <div className='break-words'>
            <Section title="Experience" subtitle="Previous roles">


                <CvEntry
                    institution="Commercial law firm, Glasgow"
                    title="Trainee Solicitor"
                    period="2022 - Current"
                />

                <CvEntry
                    institution="Debt recovery law firm, Glasgow"
                    title="Court Department / Developer"
                    period="2016; 2019"
                />

            </Section>

            <Section title="Education" subtitle="My background">

                <CvEntry
                    institution="University of Glasgow, UK"
                    title="Diploma in Professional Legal Practise"
                    result="Merit"
                    period="2021 - 2022"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione beatae accusantium quibusdam cumque quod aspernatur. Tenetur temporibus possimus expedita maiores voluptatum maxime, facere velit earum repellendus consectetur doloribus voluptates."
                />

                <CvEntry
                    title="Law LLB (Hons.)"
                    period="2017 - 2021"
                    result="First class"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione beatae accusantium quibusdam cumque quod aspernatur. Tenetur temporibus possimus expedita maiores voluptatum maxime, facere velit earum repellendus consectetur doloribus voluptates."
                />

                <CvEntry
                    institution="Uppsala University, Sweden"
                    title="Erasmus+ Exchange Programme (Law)"
                    period="2019 - 2020"

                />

                <CvEntry
                    institution="Unnamed High School"
                    title="6x Scottish Highers; Advanced Higher Computing Science"
                    result="AAAAAAB"
                    period="2011 - 2017"

                />

            </Section>
        </div>
    )
}

export default CV

