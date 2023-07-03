import { Box, Skeleton, Stack } from '@mui/material'
import Post from './Post'

import imagePost1 from '../assets/img/post/IMG_post-1.jpeg'
import imagePost2 from '../assets/img/post/IMG-post-2.jpeg'
import imagePost3 from '../assets/img/post/IMG_post-3.jpeg'
import imagePost4 from '../assets/img/post/IMG-post-4.jpeg'

import { useState } from 'react'

function Feed() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (

    <Box flex={4} p={2}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post imagePost={imagePost1} />
          <Post imagePost={imagePost2} />
          <Post imagePost={imagePost3} />
          <Post imagePost={imagePost4} />
        </>
      )}
    </Box>
  )
}

export default Feed