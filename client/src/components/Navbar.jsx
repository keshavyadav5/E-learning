import { Menu, School } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import DarkMode from '@/pages/DarkMode'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {

  const user = true;

  return (
    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-30 px-4'>

      {/* Desktop version  */}
      <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full'>
        <div className="flex items-center gap-2">
          <School />
          <h1 className='hidden md:block font-extrabold text-2xl'>E-Learning</h1>
        </div>

        <div className='flex items-center gap-4'>
          {
            user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className='cursor-pointer'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                    </DropdownMenuItem>

                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) :
              (
                <div className='flex items-center gap-1'>
                  <Button className='cursor-pointer' variant='outline'>Login</Button>
                  <Button className='cursor-pointer'>Signup</Button>
                </div>
              )
          }
          <DarkMode />
        </div>
      </div>


      {/* Mobile version  */}
      <div className="flex items-center justify-between p-4 h-full md:hidden">
        <div className="flex items-center gap-2">
          <School />
          <h1 className='font-extrabold text-2xl'>E-Learning</h1>
        </div>
        <MobileVersion />
      </div>
    </div>
  )
}

export default Navbar



const MobileVersion = () => {

  const  role = 'instructor';
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className='bg-gray-200 hover:bg-gray-300' variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetHeader className='flex flex-row items-center justify-between mt-7 mb-0 pb-0'>
          <SheetTitle className='font-extrabold text-2xl'>E-Learning</SheetTitle>
          <DarkMode />
        </SheetHeader>
        <hr />
        <nav className='flex flex-col space-y-4 px-4'>
          <span>My Learning</span>
          <span>Edit Profile</span>
          <p>Log Out</p>
        </nav>
        {
          role === 'instructor' &&
          <SheetFooter>
            <Button type="submit">Dashboard</Button>
          </SheetFooter>
        }
      </SheetContent>
    </Sheet>
  )
}