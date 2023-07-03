import { Tooltip, Fab, Box, Typography, Modal, styled, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { useState } from 'react'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    marginBottom: '20px'
})


function Add() {
    const [openAddNewPost, setOpenAddNewPost] = useState(false)

    return (
        <>
            <Tooltip
                title="Add new post"
                sx={{
                    position: 'fixed',
                    bottom: '20px',
                    left: { xs: 'calc(50%)', lg: '100px' },
                    transform: 'translateX(-50%)'
                }}>
                <Fab color="primary" aria-label="add" onClick={() => setOpenAddNewPost(true)}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={openAddNewPost}
                onClose={() => setOpenAddNewPost(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
                    <Typography variant="h6" color={'gray'} textAlign={'center'}>
                        Create New Post
                    </Typography>

                    <UserBox>
                        <Avatar children="NH" sx={{ width: 30, height: 30, fontSize: '15px' }} />
                        <Typography variant="span">
                            Huy Nguyễn
                        </Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-flexible"
                        multiline
                        maxRows={3}
                        placeholder='What do you think?'
                        variant="standard"
                    />

                    <Stack direction={'row'} mt={2} gap={1} mb={3}>
                        <EmojiEmotionsIcon style={{color:'#ffd600'}} />
                        <ImageIcon style={{color:'#4caf50'}}/>
                        <VideocamIcon style={{color:'#ff1744'}}/>
                        <PersonAddAltIcon  color='primary'/>
                    </Stack>

                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{maxWidth: "100px"}}><CalendarMonthIcon /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add