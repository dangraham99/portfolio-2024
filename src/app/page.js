import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between sm:p-24 p-12 bg-stone-100 dark:bg-black dark:text-stone-100">

      <div class="mx-auto xl:w-1/2 md:w-2/3">
        <h1 class="sm:text-5xl text-3xl font-semibold">Daniel Graham</h1>
        <div class="flex space-x-4  tracking-widest text-sm uppercase underline mt-2 font-regular text-red-400 ">
          <p className="cursor-pointer">github</p>
          <p className="cursor-pointer">twitter</p>
          <p className="cursor-pointer">email</p>

        </div>

        <div className="my-8 tracking-tigher sm:text-xl">

          <p className="font-semibold text-2xl  mb-6 leading-7">Hello, my name is Dan. I'm a <span className='text-red-400'>software and web developer.</span> </p>

          <p className="leading-6">I'm a law graduate with an interest in software and web development. Currently I work with React and React Native. I've also enjoyed working with Flutter and SwiftUI.</p>
          <p className='mt-4'>Let's work together!</p>
        </div>
      </div>


    </main>
  )
}
