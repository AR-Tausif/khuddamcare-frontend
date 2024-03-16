import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import AvatarPhoto from '@/utils/avatarImage'
import { CircleCheck, CircleChevronRight } from 'lucide-react'
import { Button } from './ui/button'
  

  const data = [
  {
    id:"1",
    about: "Frontend developer",
    age: 17,
    status: 'active'
  },
  {
    id:"2",
    about: "Frontend developer",
    age: 17,
    status: 'active'
  },
  {
    id:"3",
    about: "Frontend developer",
    age: 17,
    status: 'active'
  },
  {
    id:"4",
    about: "Frontend developer",
    age: 17,
    status: 'active'
  },
  {
    id:"5",
    about: "Frontend developer",
    age: 17,
    status: 'active'
  },
  {
    id:"6",
    about: "Frontend developer",
    age: 17,
    status: 'active'
  },
  ]
const UsersTable = () => {
  return (
    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="" >Name & Phone</TableHead>
      <TableHead >Majlish</TableHead>
      <TableHead>Age</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">More</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="">
    {data.map(row =>(<TableRow key={row.id} className="">
      <TableCell> 
      
      <a className="inline-flex items-center">
          <AvatarPhoto img="https://github.com/shadcn.png" text="TR" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">Tausif Ahmed</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">+880 1315 070289</span>
          </span>
        </a>

         </TableCell>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell> <div className='text-green-500 flex items-center'><CircleCheck  className="mr-2 w-[0.87rem]" /> <span className='text-[0.87rem]'>Active</span></div> </TableCell>
      <TableCell className="flex flex-row-reverse"> <Button variant="ghost" className="rounded-full"><CircleChevronRight /></Button> </TableCell>
    </TableRow>))}
  </TableBody>
</Table>

  )
}

export default UsersTable