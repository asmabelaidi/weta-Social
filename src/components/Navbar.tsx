const { Box } = require("@mui/system");
import { AppBar, Avatar, Badge, ListItemIcon, Menu, MenuItem, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React, {useState, useCallback} from 'react'
import IconButton from '@mui/material/IconButton';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import RecentChat from './RecentChat';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';
// ------------ Styled Items -------------

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between"
});
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
  '&:hover': {
    backgroundColor: "white",
    },
    marginLeft: 0,
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '40%',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'gray',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const Icons = styled(Box)(({ theme }) => ({
     display: "none",
     justifyContent: "center",
     gap: "20px",
      [theme.breakpoints.up("sm")]:{
        display: "flex",
    }
  })); 
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none",
    }
 })); 
function NavBar () {
    // ---------Modal states--------
    const [profileOpen, setProfileOpen] = useState(false)
    const [notificationsOpen, setNotificationsOpen] = useState(false)
    const [messagesOpen, setMessagesOpen] = useState(false)
    // ----------States we need ---------

    // -----Other Hooks ----------
    const router = useRouter()
    const logout =  useCallback(async() => {
      console.log('Logout')
     localStorage.removeItem('token')
     localStorage.removeItem('user')
     router.push('/')
    }, [router]);
     return (
        <Box sx={{
          flexGrow: 1,
          margin: 0,
          padding:0,
          height:50
          }}>
            
           <AppBar style={{position: 'fixed'}}>
               <StyledToolbar>
                    <Typography variant="h6" sx={{display:{xs: "none", sm: "block"}}}>Weta Mui</Typography>
                    <InvertColorsIcon sx={{display: {xs: "block", sm:"none"}}}/>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{color: "gray",}} />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Icons>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon onClick={e =>setMessagesOpen(true)} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 8 new notifications"
                            color="inherit"
                            >
                            <Badge badgeContent={8} color="error">
                                <NotificationsIcon  onClick={e => {setNotificationsOpen(true)}} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            >
                            <Avatar alt="Profile Picture" 
                                onClick={(e)=>setProfileOpen(true)}   
                                sx={{width: 30, height:30,}}
                                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                            />
                        </IconButton>
                    </Icons>
                    <UserBox>
                        <Avatar alt="Profile Picture" 
                                onClick={(e)=>setProfileOpen(true)}
                                sx={{width: 30, height:30,}}
                                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        />
                        <Typography variant="body2" sx={{margin: "auto"}}>Lana Rose</Typography>
                    </UserBox>
               </StyledToolbar>
               <Menu
                    id="basic-menu"
                    open={profileOpen}
                    onClose={(e)=>setProfileOpen(false)}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                  >
                    <MenuItem>
                      <Avatar
                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"

                       sx={{marginRight: "10px"}} /> Lana Rose
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={e=> logout()}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
               </Menu>
               <Menu
                    id="notifications-menu"
                    open={notificationsOpen}
                    onClose={(e)=>setNotificationsOpen(false)}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                  >
                    <MenuItem>
                    <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="Anna Maria" />
                    <Typography sx={{margin:"10px", fontSize: "15px"}}>Anna montioned you in a comment</Typography>
                    <ChatBubbleIcon color="success" />
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Avatar src="https://randomuser.me/api/portraits/men/54.jpg" alt="Andrew tate" />
                      <Typography sx={{margin:"10px", fontSize: "15px"}}>Andrew liked your picture</Typography>
                      <FavoriteIcon color="error" />
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Avatar src="https://randomuser.me/api/portraits/men/52.jpg" alt="Louise" />
                      <Typography sx={{margin:"10px", fontSize: "15px"}}>Louise commented on your picture</Typography>
                      <ChatBubbleIcon color="success" />
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                       <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" alt="John Doe" />
                       <Typography sx={{margin:"10px", fontSize: "15px"}}>john Doe liked your comment</Typography>
                       <FavoriteIcon color="error" />
                    </MenuItem>
                    <Divider />
                    <Accordion>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography color="primary">See more</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <MenuItem>
                            <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="Anna Maria" />
                            <Typography sx={{margin:"10px", fontSize: "15px"}}>Anna montioned you in a comment</Typography>
                            <ChatBubbleIcon color="success" />
                        </MenuItem>
                            <Divider />
                        <MenuItem>
                            <Avatar src="https://randomuser.me/api/portraits/men/54.jpg" alt="Andrew tate" />
                            <Typography sx={{margin:"10px", fontSize: "15px"}}>Andrew liked your picture</Typography>
                            <FavoriteIcon color="error" />
                        </MenuItem>
                            <Divider />
                        <MenuItem>
                            <Avatar src="https://randomuser.me/api/portraits/men/52.jpg" alt="Louise" />
                            <Typography sx={{margin:"10px", fontSize: "15px"}}>Louise commented on your picture</Typography>
                            <ChatBubbleIcon color="success" />
                            </MenuItem>
                            <Divider />
                        <MenuItem>
                            <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" alt="John Doe" />
                            <Typography sx={{margin:"10px", fontSize: "15px"}}>john Doe liked your comment</Typography>
                            <FavoriteIcon color="error" />
                        </MenuItem>
                        </AccordionDetails>
                    </Accordion>

                    
               </Menu>
               <Menu
                    id="messages-menu"
                    open={messagesOpen}
                    onClose={(e)=>setMessagesOpen(false)}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <RecentChat />
               </Menu>
            
           </AppBar>
        </Box>
     )
}
export default NavBar;