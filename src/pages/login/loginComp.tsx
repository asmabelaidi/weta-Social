import { Box, Typography, styled, Grid, Link, Divider, Palette, Modal, } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signup from '../signup';
// import jwt from 'jsonwebtoken';
import Router , {useRouter}  from 'next/router';
import { useGetAllUsersQuery, useLoginMutation } from '@/services/api';
import { stringify } from 'querystring';

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

// -----Styled Components

const UserNameField = styled(TextField)({
      '&: hover': {
        borderColor: '#3f51b5',
        borderWidth: 1,
      }
  });
const LoginButton = styled(Button)({
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#1877f2",
    '&: hover': {
      backgroundColor: "#1877f2",
    }
});
const ForgetPassword = styled(Stack)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});
const RegisterButton = styled(Button)({
    width: "80%",
    fontSize: "17px",
    backgroundColor: "#42b72a",
    '&: hover': {
      backgroundColor: "#42b72a",
    }

});
const CreatePage= styled(Stack)({
     marginTop: "15px",
     gap:8,
     display:"flex",
     justifyContent:"center",
     
});


const LoginComp = () => {

    const [openRegister, setOpenRegister] = useState(false)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const router = useRouter()
    const [login, { isLoading, isSuccess, }] = useLoginMutation();
    const [loginData, setLoginData] = useState({email: "", password: ""})

    React.useEffect(() => {
      if(isSuccess){
        router.push('/')
      } else {
        setError('Something went wrong')
      }
    }, [isSuccess])

    const handleLogin = (e: any) => {
      setLoginData( {email: username, password: password})
      console.log({email: username, password: password});  
      login({email: username, password: password});

    };
  return (
    <ThemeProvider theme={loginTheme}  >
          <CssBaseline />
            <Box 
             sx={{backgroundColor: "#f0f2f5", height:"100vh",}}>
                <Container fixed>
                        <Grid sx={{height:"100vh", display: "flex", 
                              alignItems: "center",}} gap={8}>
                            <Grid item xs={6}>
                                <Typography variant="h3" color="blue">Weta-Social</Typography>
                                <Typography variant="h5" color="black">With Weta-Social,</Typography>
                                <Typography variant="h5" color="black">Share and stay connected with your environement</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <Card elevation={4} sx={{borderRadius: 4,}}>
                                        <CardContent>
                                            <Box
                                              component="form"
                                                sx={{
                                                    margin: 1, width: "396px",
                                                }}
                                                noValidate
                                            >
                                              {error !== '' && <Typography>{error}</Typography>}
                                                <UserNameField color="primary" fullWidth
                                                  sx={{marginBottom: "10px"}} 
                                                  id="username"
                                                  // inputRef={usernameRef}
                                                  value={username}
                                                  onChange={(e)=> setUsername(e.target.value)}
                                                  label="Email, Phone Number Or Username"
                                                  variant="outlined" required
                                                />
                                                <TextField fullWidth 
                                                sx={{marginBottom: "10px"}} 
                                                color="primary" type="password" 
                                                id="password" label="Password"
                                                value={password}
                                                // inputRef={passwordRef}
                                                onChange={(e)=> setPassword(e.target.value)}
                                                variant="outlined" required
                                                />
                                                <LoginButton variant="contained"
                                                onClick={handleLogin}
                                                            fullWidth 
                                                >
                                                Login
                                                </LoginButton>
                                                <ForgetPassword 
                                                >
                                                    <Link
                                                      component="button"
                                                      variant="body2"
                                                      underline='none'
                                                    >
                                                      Forget the Password ?
                                                    </Link>
                                                </ForgetPassword>
                                                <Divider sx={{margin: "20px"}} />
                                                <Stack sx={{display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            height: '100%',}}
                                                >
                                                  <RegisterButton
                                                          variant="contained"
                                                          onClick={e => setOpenRegister(true)}
                                                  >
                                                    Regitser
                                                  </RegisterButton>
                                                </Stack>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                    <CreatePage direction="row">
                                      <Link underline='hover'
                                            sx={{fontWeight:"bold", color:"black", textDecoration:"non"}}
                                      > 
                                            Create a page 
                                      </Link>
                                      <Typography>for a celebrity, brand, or business.</Typography>
                                        
                                    </CreatePage>
                                </Box>
                            </Grid>
                        </Grid>
              </Container>
                <Modal
                  open={openRegister}
                  onClose={e=> setOpenRegister(false)}
                  aria-labelledby="register-modal"
                  aria-describedby="register-modal-description"
                >
                <Signup />
                </Modal>
            
            </Box>
        </ThemeProvider>
  
  )
};

export default LoginComp