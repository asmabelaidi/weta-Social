'use client';
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from './../compopnents/Feed'
import SideBar from './../compopnents/SideBar'
import RightBar from './../compopnents/RightBar'
import NavBar from './../compopnents/Navbar'
import AddPost from './../compopnents/AddPost'
import Skeleton from '@mui/material/Skeleton';
import {useState} from 'react'
import Link from "next/link";

interface MediaProps {
  loading?: boolean;
}

export default function Home(props: MediaProps) {
  // --------States------------

  const { loading = false } = props;
  const [mode, setMode] = useState('light');
  
  // -------Functions ------
  const isLoggedIn = ()=>{
    const logged = localStorage.getItem('token')
    console.log(logged);
    return !!logged;
  }


  // ((((((((((((Theme))))))))))))

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
     <>
        <ThemeProvider theme={darkTheme}>
          {isLoggedIn()?   <Box sx={{backgroundColor: "background.default",color: "text.primary"}}>
                {loading?  <Skeleton variant="rectangular" width={100} height={60} /> : <NavBar />}
                <Stack direction="row" spacing={2} justifyContent="space-evenly" >
                  <SideBar mode={mode} setMode={setMode} /> 
                  <Feed />
                  <RightBar />
                  
                </Stack>
                <AddPost />
          </Box>: <Link href="/login">Login Or register </Link>}
        
        </ThemeProvider>
     </>
  )
}
