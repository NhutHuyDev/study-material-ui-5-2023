import { Avatar, AvatarGroup,Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

import avatar1 from '../assets/img/avatar/avatar-1.jpg'
import avatar2 from '../assets/img/avatar/avatar-2.jpg'
import avatar3 from '../assets/img/avatar/avatar-3.jpg'
import avatar4 from '../assets/img/avatar/avatar-4.jpg'
import avatar5 from '../assets/img/avatar/avatar-5.jpg'

import imagePost1 from '../assets/img/post/IMG_post-1.jpeg'
import imagePost2 from '../assets/img/post/IMG-post-2.jpeg'
import imagePost3 from '../assets/img/post/IMG_post-3.jpeg'
import imagePost4 from '../assets/img/post/IMG-post-4.jpeg'

function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', lg: 'block' }}}>
      <Box className="right-bar" position={'fixed'} height={650} sx={{overflowY: 'scroll'}}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={4} sx={{ justifyContent: 'left' }}>
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Remy Sharp" src={avatar2} />
          <Avatar alt="Remy Sharp" src={avatar3} />
          <Avatar alt="Remy Sharp" src={avatar4} />
          <Avatar alt="Remy Sharp" src={avatar5} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} mt={2}>
          Latest Post
        </Typography>
        <ImageList cols={3} rowHeight={200} gap={2}>
          <ImageListItem>
            <img src={imagePost1} />
          </ImageListItem>
          <ImageListItem>
            <img src={imagePost4} />
          </ImageListItem>
          <ImageListItem>
            <img src={imagePost3} />
          </ImageListItem>
          <ImageListItem cols={3}>
            <img src={imagePost2} />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={300} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={avatar1} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={avatar2} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={avatar3} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default RightBar