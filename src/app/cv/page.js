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
                    description="Currently working towards qualification as a solicitor in Scotland at an independent commercial law firm, with a focus on commercial and insurance litigation."
                />

                <CvEntry
                    institution="University of Glasgow, UK"
                    title="REACH Programme Student Mentor"
                    period="2018 - 2021 (annual)"
                    description={
                        <span>Worked as a mentor in the widening access programme at the University of Glasgow designed to introduce senior secondary school pupils to legal and academic study. This is an annually recurring role in which I was also engaged in 2018 and 2019. Tasks included:
                            <ul className='ml-10 list-disc'>
                                <li>Leading workshops furthering students’ understanding of studying law</li>
                                <li>Teaching of advocacy skills and an introduction to European human rights law</li>
                                <li>Moot preparation</li>
                            </ul>
                        </span>
                    }
                />

                <CvEntry
                    institution="John Smith Centre, Glasgow"
                    title="Parliamentary Intern"
                    period="2020 - 2021"
                    description={
                        <span>
                            Engaged in a part time non-partisan role as a Scottish Parliamentary Intern seconded to the Office of Jamie Greene MSP in a research role. Responsibilities included:
                            <ul className='ml-10 list-disc'>

                                <li>Research and preparation of notes and proposals relating to a number of topical issues related to the Member’s portfolio.</li>
                                <li>Representing the Member in attending conferences/webinars hosted by interest groups.</li>
                            </ul>

                        </span>}


                />

                <CvEntry
                    institution="Debt recovery law firm, Glasgow"
                    title="Court Department / Developer"
                    period="2016; 2019"
                    description="Responsible for drafting Simple Procedure claim forms. Reviewed commercial property contracts for the firm. Redesigned and modernised crucial, bespoke firm software with the goal of retaining and increasing productivity and cost-effectiveness via automated document production. "
                />

            </Section>

            <Section title="Education" subtitle="My background">

                <CvEntry
                    institution="University of Glasgow, UK"
                    title="German language A2+; B1"
                    result="Part-time classes"
                    period="2023 - current"

                />

                <CvEntry

                    title="Diploma in Professional Legal Practise"
                    result="Merit"
                    period="2021 - 2022"

                />

                <CvEntry
                    title="Law LLB (Hons.)"
                    period="2017 - 2021"
                    result="First class"
                    description="Dissertation: “The Art of Shooting the Messenger: Searching for coherency in the intermediary liability regime of the Digital Single Market”
                    LLB modules included: Constitutional law, Property law, and Cybercrime law at Honours level. Junior honours year spent at Uppsala University, Sweden with a focus on comparative private and constitutional law.
                    "
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

