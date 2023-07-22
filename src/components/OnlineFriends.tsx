import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {Badge} from '@mui/material';
import { badgeClasses } from "@mui/material/Badge";
import { useTheme } from '@mui/material/styles';


export default function OnlineFriends() {
    const theme = useTheme();
  return (
    <AvatarGroup max={8}>
        <Badge 
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={<span style={{
              fontSize:'9px', width:"35px", height:"14px",color:"rgb(49,162,76)",
               paddingTop:"0.1rem",
              backgroundColor: "rgb(222,239,225)", borderRadius: "5px",display:"flex", justifyContent:"center"}}>14min</span>}
              
        >
           <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/51.jpg" />
        </Badge>
        <Badge color="success" variant="dot"
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{
                [`& .${badgeClasses.dot}`]: {
                marginBottom: "10px",
                marginRight: "5px",
                width: "12px",
                height: "12px",
                }
            }}
        >
           <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/54.jpg" />
        </Badge>
        <Badge color="success" variant="dot"
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{
                [`& .${badgeClasses.dot}`]: {
                marginBottom: "10px",
                marginRight: "5px",
                width: "12px",
                height: "12px",
                }
            }}
        >
           <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/50.jpg" />
        </Badge>
        <Badge 
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={<span style={{
              fontSize:'9px', width:"35px", height:"14px",color:"rgb(49,162,76)",
               paddingTop:"0.1rem", justifyContent:"center", display:"flex",
              backgroundColor: "rgb(222,239,225)", borderRadius: "5px",
               }}> 1h</span>}
              
        >
           <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/52.jpg" />
        </Badge>
        <Badge color="success" variant="dot"
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{
                [`& .${badgeClasses.dot}`]: {
                marginBottom: "10px",
                marginRight: "5px",
                width: "12px",
                height: "12px",
                }
            }}
        >
           <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/wommen/51.jpg" />
        </Badge> 
        <Badge color="success" variant="dot"
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{
                [`& .${badgeClasses.dot}`]: {
                marginBottom: "10px",
                marginRight: "5px",
                width: "12px",
                height: "12px",
                }
            }}
        >
           <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/53.jpg" />
        </Badge> 
        <Badge color="success" variant="dot"
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{
                [`& .${badgeClasses.dot}`]: {
                marginBottom: "10px",
                marginRight: "5px",
                width: "12px",
                height: "12px",
                }
            }}
        >
           <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/58.jpg" />
        </Badge> 
        <Badge color="success" variant="dot"
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{
                [`& .${badgeClasses.dot}`]: {
                marginBottom: "10px",
                marginRight: "5px",
                width: "12px",
                height: "12px",
                }
            }}
        >
        <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/59.jpg" />
        </Badge> 
        <Badge color="success" variant="dot"
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{
                [`& .${badgeClasses.dot}`]: {
                marginBottom: "10px",
                marginRight: "5px",
                width: "12px",
                height: "12px",
                }
            }}
        >
           <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/56.jpg" />
        </Badge>
    
  
     
      <Avatar alt="Trevor Henderson" />
    </AvatarGroup>
  );
}