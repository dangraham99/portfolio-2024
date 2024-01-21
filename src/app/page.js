import Image from 'next/image'
import Section from '@/components/home/Section'
import Header from '@/components/util/Header'
import Hero from '@/components/home/Hero'
import CvEntry from '@/components/home/CVEntry'

export default function Home() {






  return (
    <main className="  ">
      <Header />
      <div class="mx-auto xl:w-1/2 md:w-2/3 px-8 min-h-screen">
        <div class="mb-24">
          <Hero />
        </div>




        <Section title="Projects" subtitle="Previous work">




        </Section>

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


    </main>
  )
}
