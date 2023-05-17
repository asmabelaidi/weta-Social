import React, { useCallback, useRef, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { store } from '@/stores/store';
import {Provider } from "react-redux";
import LoginComp from './loginComp';

// -----Theme---------
export const loginTheme = createTheme({

  typography: {

    button: { 
      fontSize: "20px",
      height: "48px",
      lineHeight:"48px",
      textTransform: "none",
      borderRadius: "8px",
      fontWeight: "bold",
    },    
  },  
});


function index() {

  return (
    <div>
        <Provider store={store}>
            <ThemeProvider theme={loginTheme}>
               <LoginComp />
             </ThemeProvider>
        </Provider>
    </div>  
  
  )
}

export default index;