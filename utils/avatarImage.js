import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const AvatarPhoto = ({img, text, size}) => {
  return (
    <Avatar>
        <AvatarImage src={img} />
        <AvatarFallback>{text}</AvatarFallback>
      </Avatar>
  )
}

export default AvatarPhoto