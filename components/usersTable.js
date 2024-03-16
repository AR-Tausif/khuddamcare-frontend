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

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
  

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
      <TableHead className="w-[80px]" >Photo</TableHead>
      <TableHead >About</TableHead>
      <TableHead>Age</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="space-y-52">
    {data.map(row =>(<TableRow key={row.id} className="">
      <TableCell> 
      <Avatar className="w-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
         </TableCell>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>))}
  </TableBody>
</Table>

  )
}

export default UsersTable