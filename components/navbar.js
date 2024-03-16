import React from 'react'
import { Bell, BellDotIcon, BellIcon } from 'lucide-react'
import AvatarPhoto from '@/utils/avatarImage'


const Navbar = () => {
  return (
    <div className='flex flex-row-reverse items-center h-[2.9rem] border-b shadow-sm p-2'>
      
      <p><BellIcon/></p>
      <AvatarPhoto img="https://github.com/shadcn.png" text="TR" />
      
    </div>
  )
}

export default Navbar