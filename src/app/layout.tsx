// import './globals.css'
// import {Provider } from "react-redux";
// import { store } from "@/stores/store";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
   
//       <html lang="en">
//         {/*
//           <head /> will contain the components returned by the nearest parent
//           head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//         */}
//         <head >
//         <link
//             rel="stylesheet"
//             href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700&display=swap"
//         />  
//         </head>
//         <body>
//           <Provider store={store}> 
//             {children}
//           </Provider>
//         </body>
//       </html>
      
//   )
// }
"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <html lang="en">
      {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700&display=swap"
        />
      </head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
