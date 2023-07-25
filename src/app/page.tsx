// 'use client';
// import { Box, createTheme, ThemeProvider, PaletteMode } from "@mui/material";
// import { Stack } from "@mui/system";
// import Feed from '../components/Feed'
// import SideBar from '../components/SideBar'
// import RightBar from '../components/RightBar'
// import NavBar from '../components/Navbar'
// import AddPost from '../components/AddPost'
// import {useState} from 'react'
// import {Provider } from "react-redux";
// import { store } from "@/stores/store";
// // import Test from "@/pages/test";
// import dynamic from 'next/dynamic';

// const Test = dynamic(() => import('../pages/test'), { ssr: false });


// const Page  = () => {
//   // --------States------------

//   const [mode, setMode] = useState<PaletteMode>('light');
  
//   // -------Functions ------
//   const isLoggedIn = ()=>{
//     // const logged = localStorage.getItem('token')
//     const logged =  typeof window !== "undefined" ?  window.localStorage.getItem("token") : null;
//     console.log(logged);
//     return !!logged;
//   }


//   // ((((((((((((Theme))))))))))))

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });
//    // ((((((((((((data))))))))))))

//   return (
//      <>
//      {/* <Provider store={store}> */}
//         <ThemeProvider theme={darkTheme}>
//           {isLoggedIn()?   <Box sx={{backgroundColor: "background.default",color: "text.primary"}}>
//                 <NavBar />
//                 <Stack direction="row" spacing={2} justifyContent="space-evenly" >
//                   <SideBar mode={mode} setMode={setMode} /> 
//                   <Feed />
//                   <RightBar />
                  
//                 </Stack>
//                 <AddPost />
//           </Box>: <Test />}
//               {/* </Box>: <Index />}  */}
        
//         </ThemeProvider>
//       {/* </Provider> */}
//      </>
//   )
// }

// export default Page;
// // export const dynamic = 'force-dynamic'
// "use client";
import { Box, createTheme, ThemeProvider, PaletteMode, Stack } from "@mui/material";
// import { Stack } from "@mui/system";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import RightBar from "../components/RightBar";
import NavBar from "../components/Navbar";
import AddPost from "../components/AddPost";
// import Test from "@/pages/test";
import dynamic from "next/dynamic";

const Test = dynamic(() => import("../pages/test"), { ssr: false });

const Page = () => {
  // -------Functions ------
  const isLoggedIn = () => {
    // const logged = localStorage.getItem('token')
    const logged =
      typeof window !== "undefined"
        ? window.localStorage.getItem("token")
        : null;
    console.log(logged);
    return !!logged;
  };

  return (
    <>
      {/* <Provider store={store}> */}

      {isLoggedIn() ? (
        <Box
          sx={{ backgroundColor: "background.default", color: "text.primary" }}
        >
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            {/* <SideBar mode={mode} setMode={setMode} /> */}
            <Feed />
            <RightBar />
          </Stack>
          <AddPost />
        </Box>
      ) : (
        <Test />
      )}
      {/* </Box>: <Index />}  */}

      {/* </Provider> */}
    </>
  );
};

export default Page;
// export const dynamic = 'force-dynamic'
