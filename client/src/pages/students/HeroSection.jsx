import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 mt-16 py-16 px-4 flex flex-col items-center justify-center'>
      <div className='max-w-3xl mx-auto flex items-center flex-col'>
        <h1 className='text-white text-xl sm:text-4xl font-bold mb-4'>Find The Best Course For You!</h1>
        <p className='text-gray-200 text-sm sm:text-lg text-center  dark:text-gray-400 mb-8'>Discover, learn and Upskill with our wide range of courses</p>
        
        <form action="" className='flex items-center bg-white dark:bg-gray-900 rounded-full shadow-lg overflow-hidden max-w-2xl md:w-xl mx-auto mb-6'>
          <Input
            type='text'
            className='flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500'
            placeholder='search courses'
          />
          <Button className='bg-blue-600 dark:bg-gray-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800'>search</Button>
        </form>
        <Button className='bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200'>Explore Courses</Button>
      </div>
    </div>
  )
}

export default HeroSection