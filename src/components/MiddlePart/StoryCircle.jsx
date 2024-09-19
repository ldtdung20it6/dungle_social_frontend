import { Avatar } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const StoryCircle = () => {
  return (
    <div>
        <div className='flex flex-col items-center mr-4 cursor-pointer'>
          <Avatar
          sx={{ width: '5rem', height: '5rem' }}
          
          // src='https://cdn.pixabay.com/photo/2024/07/08/05/41/girl-8880144_1280.png' 
          >
            <AddIcon sx={{fontSize:"3rem"}}/>
          </Avatar>
          <p>dungle</p>
        </div>
    </div>
  )
}

export default StoryCircle