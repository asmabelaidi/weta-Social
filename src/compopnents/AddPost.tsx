import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import { Avatar, Box, Modal, styled, Typography } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import { Stack } from '@mui/system';
// -------ICONS---------
import AddReactionIcon from '@mui/icons-material/AddReaction';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Button from '@mui/material/Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';

// --------StyledComponents--------
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap:"10px",
  marginBottom: "10px",
})
function AddPost() {
  const [open, setOpen] = useState(false)
  return (
    <>
 
    <Tooltip title="add" onClick={e=> setOpen(true)}
     sx={{position: "fixed", bottom: 20, left: {xs:"calc(50% - 25px)", md:30}}}>
      <Fab color="primary" aria-label="add">
         <AddIcon />
      </Fab>
    </Tooltip>
    <StyledModal open= {open} onClose={e => setOpen(false)}>
       <Box sx={{backgroundColor: "white", padding: 3, width: 420, height: 280, borderRadius: 7,}}>
            <Typography variant="h6" color='gray' textAlign="center">
              Create Post
            </Typography>
            <UserBox>
                <Avatar alt="Profile Picture" 
                                    sx={{width: 30, height:30,}}
                                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                />
                <Typography variant="body1" fontWeight={500}>
                    Lana Rose
                </Typography>
            </UserBox>
            <TextField
              fullWidth
              id="standard-multiline-static"
              label="What's on your mind"
              multiline
              rows={3}
              defaultValue=""
              variant="standard"
            />
            <Stack direction="row" gap={2} mt={2} mb={3}>
                   <AddReactionIcon color="primary" />
                   <InsertPhotoIcon color="secondary" />
                   <VideoCallIcon color="success" />
                   <PersonAddAlt1Icon color="error" />
            </Stack>
            <ButtonGroup fullWidth
             size="large" aria-label="Post Button">
              <Button variant="contained">Post</Button>
              <Button variant="outlined" sx={{width:"100px",}}>
                <DateRangeIcon />
              </Button>
            </ButtonGroup>
       </Box>
    </StyledModal>
    </>
  )
}

export default AddPost