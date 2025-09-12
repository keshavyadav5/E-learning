import {
  AvatarImage,
  Avatar,
  AvatarFallback
} from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"

const Course = () => {
  return (
    <Card className='overflow-hidden rounded-lg dark:bg-gray-800 bg-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 pt-0'>
      <div className='relative'>
        <img src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
          alt="image"
          className='w-full h-36 object-cover rounded-t-lg'
        />
      </div>
      <CardContent className={'space-y-[7px]'}>
        <h1 className='hover:underline font-bold text-lg truncate'>Next js Complete course in hindi</h1>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className='text-sm font-medium'>Keshav MERN stack</h1>
          </div>
          <Badge className={'bg-blue-600 text-white px-2 py-1 rounded-full text-xs'}>
            Advance
          </Badge>
        </div>
        <div className='text-lg font-bold'>
          <span> ₹499</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default Course