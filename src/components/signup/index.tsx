import {Typography, Box, styled, Tooltip, IconButton, Button} from '@mui/material';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import React from 'react'
import SelectDate from './SelectDate';
import SelectMonth from './SelectMonth';
import SelectYear from './SelectYear';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Link from 'next/link';


// -------Styled-------
const RegisterModal = styled(Box)({
    paddingTop: "16px",
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    width: 480,
    height: 600,
    display: "block",
    /* justifyContent: "left",*/
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    border: '1px solid #fff',
    borderRadius: "8px",
    boxShadow: "24px",
});
const RegisterNowButton = styled(Button)({
   width: "50%",
   marginTop: "10px", 
   marginBottom: "10px", 
   height:"35px",
});
function Signup() {
    const [gender, setGender] = React.useState('female');

    const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
    };
  return (
    <>
        <RegisterModal>
                <Typography variant='h6' sx={{fontWeight: "bold"}}>Register From here</Typography>
                <Typography variant="body1" sx={{color: "gray"}} mb={2} mt={0.5}>It's fast and easy</Typography>
                <Divider />
                <Stack direction="row"  mt={2} gap={2} mb={2}>
                    <TextField color="primary" size='small'
                        id="name" label="Name" sx={{width: "50%"}}
                        variant="filled" required
                    />
                    <TextField color="primary" size='small'
                        id="family_name" label="Family Name"
                        variant="filled" required sx={{width: "50%"}}
                    />
                </Stack>
                <Stack>
                    <TextField color="primary" size='small' 
                            id="email" label="Email or phone number"
                            variant="filled" required
                    />
                    <TextField sx={{marginTop: 2,}} color="primary" size='small' 
                            id="password" label="Create a new password"
                            variant="filled" required type="password"
                    />
                </Stack>
                <Typography sx={{marginTop: 2,fontWeight: "bold", color:"grey", fontSize:"12px"}}>
                    date of birth
                    <Tooltip title="Providing your date of birth ensures that your Facebook experience is tailored to your age. To change who can see this information, go to the About section of your profile. For more information, please refer to our Privacy Policy.">
                        <IconButton>
                            <HelpOutlineIcon sx={{fontSize:"15px"}} />
                        </IconButton>
                    </Tooltip>
                </Typography>
                <Stack direction="row" mt={0} gap={2} mb={2}>
                  <SelectDate />
                  <SelectMonth />
                  <SelectYear />
                   
                </Stack>
                <Typography sx={{marginTop: 2,fontWeight: "bold", color:"grey", fontSize:"12px"}}>
                    Gender
                    <Tooltip
                     title="You can later change who sees your gender on your profile. Select Custom to
                            choose another gender, or if you prefer not to indicate anything.">
                        <IconButton>
                            <HelpOutlineIcon sx={{fontSize:"15px"}} />
                        </IconButton>
                    </Tooltip>
                </Typography>
                <Stack direction="row" mt={0} gap={2}>
                <FormControl>
                    <RadioGroup
                        row
                        value={gender} onChange={handleChangeGender}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                        <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                    </RadioGroup>
                </FormControl>
                </Stack>
                <Typography sx={{fontWeight: "bold", fontSize:"10px", color:"grey"}}>
                    The people who use our service were able to import your contact information to Facebook.
                     <Link href="#">Learn more</Link>
                </Typography>
                <Typography sx={{fontWeight: "bold", fontSize:"10px", color:"grey"}}>
                    In clicking on Register, you agree to our <Link href="#">General Conditions</Link>, 
                    our <Link href="#">Privacy Policy</Link>, and<Link href="#"> our Cookie Use Policy</Link>. 
                     You may receive text notifications from us and you can unsubscribe at any time
                </Typography>
                <Stack sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <RegisterNowButton color="success" variant='contained' size="small">Register</RegisterNowButton>
                </Stack>
        </RegisterModal>
    </>
  )
}

export default Signup