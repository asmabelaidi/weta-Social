import  React, {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {Avatar, Badge, Menu, MenuItem} from '@mui/material';
import { Box } from '@mui/system';
import ChatBox from './ChatBox';

export default function RecentChat() {
  const [chatOpen, setChatOpen] = useState(false)
  return (
   <Box>
      <List sx={{ width: '100%', maxWidth: 300, }}>
        <ListItem alignItems="flex-start" onClick={e => setChatOpen(true)}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/51.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Remy Sharp"
            secondary={
              <React.Fragment>
                {" I'll be in your neighborhood…"}
                <Badge color="error" badgeContent={4}
                sx={{marginLeft:2}}
                >
                  
                </Badge>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start" onClick={e => setChatOpen(true)}>
          <ListItemAvatar>
            <Avatar alt="Anna Maria" src="https://randomuser.me/api/portraits/women/52.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Anna Maria"
            secondary={
              <React.Fragment>
                {"Just Let it go, everything..."}
                <Badge color="error" badgeContent={2}
                sx={{marginLeft:2}}
                >
                  
                </Badge>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <Menu
                    id="notifications-menu"
                    open={chatOpen}
                    onClose={(e)=>setChatOpen(false)}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <ChatBox />
               </Menu>
    </Box>
   
  );
}