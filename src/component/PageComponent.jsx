import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PageComponent = ({ handleChange }) => {
    return (
       
            <div className="page-container" >
                <Stack spacing={2} sx={{ mt: 5 }}>
                    <Pagination count={5} color="primary" onChange={handleChange} />

                </Stack>
            </div>
       
    )
}

export default PageComponent