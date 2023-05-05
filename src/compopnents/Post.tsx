import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PublicIcon from '@mui/icons-material/Public';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Post = () => {
  return (
         <Card sx={{ maxWidth: "100%",  margin: 5, }}>
            <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe" src="https://randomuser.me/api/portraits/women/79.jpg">
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="Anna Maria"
            subheader={<div><span style={{fontSize: "15px"}}>7h</span> <PublicIcon sx={{fontSize: "12px"}}/></div>}
            />
            <CardContent sx={{paddingTop: 0}}>
            <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
            </CardContent>
            <CardMedia
            component="img"
            height="70%"
            image="https://source.unsplash.com/random/200x200?sig=1"
            alt="post"
            />
        
            <CardActions sx={{display:"flex", justifyContent: "space-evenly"}}>
            <IconButton aria-label="add to favorites">
            <Checkbox color="primary" icon={<ThumbUpOffAltIcon />} checkedIcon={<ThumbUpIcon />} />
            
            </IconButton>
            <IconButton aria-label="share">
            <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton aria-label="share">
            <SendIcon />
            </IconButton>
            </CardActions>
        
        </Card>
  )
}

export default Post