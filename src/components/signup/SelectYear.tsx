import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

function SelectYear() {
    
    const [year, setYear] = React.useState('');

    const handleChange = (e: any) => {
      setYear(e.target.value as string);
    };
  return ( 
  <FormControl fullWidth>
    <InputLabel id="year-label" sx={{fontSize: "14px"}}>Year</InputLabel>
    <Select
        required
        variant="filled"
        size="small"
        labelId="year-label"
        id="year-select"
        value={year}
        label="year"
        onChange={handleChange}
    >
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2018}>2018</MenuItem>
                        <MenuItem value={2017}>2017</MenuItem>
                        <MenuItem value={2016}>2016</MenuItem>
                        <MenuItem value={2015}>2015</MenuItem>
                        <MenuItem value={2014}>2014</MenuItem>
                        <MenuItem value={2013}>2013</MenuItem>
                        <MenuItem value={2012}>2012</MenuItem>
                        <MenuItem value={2011}>2011</MenuItem>
                        <MenuItem value={2010}>2010</MenuItem>
                        <MenuItem value={2009}>2009</MenuItem>
                        <MenuItem value={2008}>2008</MenuItem>
                        <MenuItem value={2007}>2007</MenuItem>
                        <MenuItem value={2006}>2006</MenuItem>
                        <MenuItem value={2005}>2005</MenuItem>
                        <MenuItem value={2004}>2004</MenuItem>
                        <MenuItem value={2003}>2003</MenuItem>
                        <MenuItem value={2002}>2002</MenuItem>
                        <MenuItem value={2001}>2001</MenuItem>
                        <MenuItem value={2000}>2000</MenuItem>

    </Select>
    </FormControl>
  )
}

export default SelectYear