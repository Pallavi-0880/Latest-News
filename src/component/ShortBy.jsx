import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NativeSelect } from '@mui/material';
import "../CSS/style.css"


const ShortBy = ({changeSort,sortBy}) => {
    return (
        <div className='box'>
            <Box sx={{ minWidth: 200,mt:2 }}>
                <FormControl className='dropDown' >
                    <InputLabel id="demo-simple-select-label" className='input'>Latest</InputLabel>
                    <Select 
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={sortBy}
                     label="Age"
                     onChange={changeSort}
                    >
                        <MenuItem value={"relevancy"}>Relevancy</MenuItem>
                       <MenuItem value={"popularity"}>Popularity</MenuItem>
                        <MenuItem value={"publishedAt"}>Latest</MenuItem>
                       
                    
                        
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}

export default ShortBy