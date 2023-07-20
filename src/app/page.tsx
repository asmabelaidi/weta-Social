'use client';
import { Box, createTheme, ThemeProvider, PaletteMode } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from './../compopnents/Feed'
import SideBar from './../compopnents/SideBar'
import RightBar from './../compopnents/RightBar'
import NavBar from './../compopnents/Navbar'
import AddPost from './../compopnents/AddPost'
import {useState} from 'react'
import {Provider } from "react-redux";
import { store } from "@/stores/store";
import Test from "@/pages/test";

const Page  = () => {
  // --------States------------

  const [mode, setMode] = useState<PaletteMode>('light');
  
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
   // ((((((((((((data))))))))))))

  return (
     <>
     <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          {isLoggedIn()?   <Box sx={{backgroundColor: "background.default",color: "text.primary"}}>
                <NavBar />
                <Stack direction="row" spacing={2} justifyContent="space-evenly" >
                  <SideBar mode={mode} setMode={setMode} /> 
                  <Feed />
                  <RightBar />
                  
                </Stack>
                <AddPost />
          </Box>: <Test />}
              {/* </Box>: <Index />}  */}
        
        </ThemeProvider>
      </Provider>
     </>
  )
}

export default Page;
// export const dynamic = 'force-dynamic'