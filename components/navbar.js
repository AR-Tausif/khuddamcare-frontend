import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Bell, BellDotIcon, BellIcon } from 'lucide-react'


const Navbar = () => {
  return (
    <div className='flex flex-row-reverse items-center h-[2.9rem] p-2'>
      
      <p>
        <BellIcon/>
      </p>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
    </div>
  )
}

export default Navbar