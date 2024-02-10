import React from 'react'
import lock from '../../assets/lock.svg'
import question from '../../assets/question.svg'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-around items-center bg-gray-200 h-14'>
            <div className='text-3xl font-bold'>tickete</div>
            <div className='text-gray-500 hover:cursor-pointer'><img src={lock} alt='lock' className='h-4 w-4 inline mb-1 ml-1'/> checkout</div>
            <div className='text-gray-500 hover:cursor-pointer font-normal'><img src={question} alt='question' className='h-3 w-3 mb-0.5 border border-black rounded-lg inline'/> Help</div>
        </div>
        <div className='bg-black text-white text-sm font-thin h-8 flex justify-around items-center'>
            <div>Holding your tickets for 30:00</div>
        </div>
    </div>
  )
}

export default Navbar