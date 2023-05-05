import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {Typography, Box, Stack} from '@mui/material';

export default function ChatBox() {
  return (
   <Box>
      <Stack sx={{padding: 2}} spacing={1} direction="row">
        <Avatar  alt="Remy Sharp" src="" />
        <Typography variant="h6">Remy Sharp</Typography>
    </Stack>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Remy Sharp"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"I'll be in your neighborhood doing errands this thin Ali Connors"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText 
          // primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {" Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
    </List>
   </Box>
  );
}