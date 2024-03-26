"use client"
import React, { useEffect, useState } from 'react'
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
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import UserDetailsBox from './userDetailsBox'
import { getUsersFromServer } from '@/lib/utils'
import axios from 'axios'
import { getAllDonor } from '@/lib/db.query'
import DateCustomizingFromISOTime from './dateCustomizingFromISOTime'

const data = [
  {
    id: "1",
    name: "Tausif Ahmed",
    majlish: "Laxmipur",
    about: "Frontend developer",
    age: 17,
    group: "AB+(ve)",
    status: 'active',
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: "1",
    name: "Rihan Ahmed",
    majlish: "Panchagarh",
    about: "Frontend developer",
    age: 17,
    group: "AB+(ve)",
    status: 'active',
    img: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    id: "1",
    name: "Sajid Ahmed",
    majlish: "Brahmanbaria",
    about: "Frontend developer",
    age: 17,
    group: "AB+(ve)",
    status: 'active',
    img: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id: "1",
    name: "Robin Vuiya",
    majlish: "Ahmadnagar",
    about: "Frontend developer",
    age: 17,
    group: "AB+(ve)",
    status: 'active',
    img: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    id: "1",
    name: "Ifti Chowdhury",
    majlish: "Sylhet",
    about: "Frontend developer",
    age: 17,
    group: "AB+(ve)",
    status: 'active',
    img: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    id: "2",
    name: "Foyzan Ahmed",
    majlish: "Narayanganj",
    about: "Frontend developer",
    age: 23,
    group: "B+(ve)",
    status: 'active',
    img: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: "3",
    name: "Saffat Hossain",
    majlish: "Dhaka",
    about: "Frontend developer",
    age: 25,
    group: "A+(ve)",
    status: 'active',
    img: "https://randomuser.me/api/portraits/men/58.jpg"
  },
  {
    id: "4",
    name: "Tokir Ahmed",
    majlish: "Laxmipur",
    about: "Frontend developer",
    age: 22,
    group: "O+(ve)",
    status: 'active',
    img: "https://randomuser.me/api/portraits/men/88.jpg"
  },
  {
    id: "5",
    name: "Suvon Ahmed",
    majlish: "Mirpur",
    about: "Frontend developer",
    age: 27,
    group: "B+(ve)",
    status: 'active',
    img: "https://github.com/shadcn.png"
  },
  {
    id: "6",
    name: "Ismam Ahmed",
    majlish: "Dhaka",
    about: "Frontend developer",
    age: 19,
    group: "AB+(ve)",
    status: 'active',
    img: "https://randomuser.me/api/portraits/men/62.jpg"
  },
]
const UsersTable = () => {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState(true)

  useEffect(()=>{
    getAllDonor(setDonors)
  },[])
 
  
console.log(donors, "sss")
  return (
    <Table>
      <TableCaption>A list of your all blood donors.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="" >Name & Phone</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-[#ff790e]">Blood Group</TableHead>
          <TableHead >Majlish</TableHead>
          <TableHead className="">Last Donate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {donors.map((donor, i) => (
          <Sheet key={i}>
            <TableRow className="text-sm">
              <TableCell>

                <a className="inline-flex items-center">
                  <AvatarPhoto img={donor.img} text="TR" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{donor.name}</span>
                    <span className="text-gray-400 text-xs tracking-wide mt-0.5">{donor.number}</span>
                  </span>
                </a>

              </TableCell>
              <TableCell>
              
                  <span className='text-[0.87rem]'>{donor.age}</span>
             
              </TableCell>
              <TableCell className="font-semibold text-[#ff790e]">{donor.bloodGroup}</TableCell>
              <TableCell className="">{donor.majlish.name}</TableCell>
              
              <TableCell className="flex ">
                <SheetTrigger className="rounded-full">
                  
                  <Button>
                  <CircleChevronRight size={18} />
                  </Button>
                  <DateCustomizingFromISOTime date={donor.lastDate.date} />
                  
                </SheetTrigger>
              </TableCell>
            </TableRow>
            <SheetContent>
              <UserDetailsBox details={donor} />
            </SheetContent>
          </Sheet>))}
      </TableBody>
    </Table>

  )
}

export default UsersTable