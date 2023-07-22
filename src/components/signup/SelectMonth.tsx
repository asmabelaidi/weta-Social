import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

function SelectMonth() {
    
    const [month, setMonth] = React.useState('');

    const handleChange = (e: any) => {
        setMonth(e.target.value as string);
    };
  return ( 
  <FormControl fullWidth>
    <InputLabel id="month-label" sx={{fontSize: "14px"}}>Month</InputLabel>
    <Select
        required
        variant="filled"
        size="small"
        labelId="month-label"
        id="month-select"
        value={month}
        label="month"
        onChange={handleChange}
    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>

    </Select>
    </FormControl>
  )
}

export default SelectMonth