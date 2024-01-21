import Image from 'next/image'

export default function Home() {
  return (
    <main className="  ">
      <header className='top-0 z-50 sticky py-4 backdrop-blur-lg mb-12 dark:bg-stone-800 border-b bg-opacity-100 dark:bg-opacity-40  dark:border-stone-700'>
        <h1 className='text-xl xl:w-1/2 md:w-2/3 md:px-0 px-4 mx-auto font-semibold '>Daniel Graham.</h1>
      </header>
      <div class="mx-auto xl:w-1/2 md:w-2/3 px-8 min-h-screen">

        <div class="mb-24">
          <div className="my-8 tracking-tigher">
            <p className="font-semibold text-3xl  mb-6 leading-7">Hello, my name is Dan. I'm a <span className='text-red-400'>software and web developer.</span> </p>
            <p className="leading-6">I'm a law graduate with an interest in software and web development. Currently I work with React and React Native. I've also enjoyed working with Flutter and SwiftUI.</p>
            <p className='mt-4'>Let's work together!</p>
          </div>
          <div class="flex space-x-4  tracking-widest text-sm uppercase underline mt-2 font-regular text-red-400 ">
            <p className="cursor-pointer">github</p>
            <p className="cursor-pointer">twitter</p>
            <p className="cursor-pointer">email</p>
          </div>
        </div>

        <div className='flex md:flex-row flex-col space-y-4 md:space-y-0'>
          <div class="sticky z-30 top-8 md:w-1/3">
            <h1 className='font-semibold text-xl'>Education</h1>
            <h2 className='uppercase font-semibold text-sm tracking-[.2em] text-stone-500'>My background</h2>
          </div>
          <div class="md:w-2/3">
            <div className='mb-12'>
              <h2 className='font-semibold text-red-400'>University of Glasgow, UK</h2>
              <div className='mb-8'>
                <div class="flex justify-between mb-4">
                  <h2 className='font-semibold'>Diploma in Professional Legal Practise <br></br><i>Merit</i></h2>
                  <h2>2021 - 2022</h2>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste impedit, vitae fugiat officiis alias nulla incidunt porro animi quam doloremque, enim ratione perspiciatis ad veniam aut sapiente qui error!
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-4">
                  <h2 className='font-semibold '>Law LLB (Hons.)<br></br><i>First class</i></h2>
                  <h2>2017 - 2021</h2>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste impedit, vitae fugiat officiis alias nulla incidunt porro animi quam doloremque, enim ratione perspiciatis ad veniam aut sapiente qui error!
                </div>
              </div>

            </div>

            <div className='mb-12'>
              <h2 className='font-semibold text-red-400'>Uppsala University, Sweden</h2>
              <div className='mb-8'>
                <div class="flex justify-between mb-4">
                  <h2 className='font-semibold '>Erasmus+ Exchange Programme (Law) </h2>
                  <h2>2019 - 2020</h2>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste impedit, vitae fugiat officiis alias nulla incidunt porro animi quam doloremque, enim ratione perspiciatis ad veniam aut sapiente qui error!
                </div>
              </div>

              <div>

              </div>

            </div>





          </div>

        </div>
      </div>


    </main>
  )
}
