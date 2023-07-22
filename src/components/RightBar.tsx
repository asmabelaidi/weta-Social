const { Box } = require("@mui/system") 
import {  Typography } from '@mui/material';
import React from 'react'
import OnlineFriends from './OnlineFriends';
import RecentChat from './RecentChat';
import RecentPictures from './RecentPictures';

function RightBar () {
     return (
        <Box flex={2}
        sx={{display: {xs: "none", sm: "block"}}}
        >
            <Box position="fixed">
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Online Friends 
                </Typography>
                <OnlineFriends />
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Recent Pictures
                </Typography>
                <RecentPictures />
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Recent Chats
                </Typography>
                <RecentChat />
            </Box>
        
        </Box>
     )
}
export default  RightBar;