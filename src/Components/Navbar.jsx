
import { Badge, Padding } from '@mui/icons-material';
import { AppBar, Box, Link, Toolbar, Typography, styled } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'

const Navbar = () => {
   
  //custom app bar
  const RedAppbar = styled(AppBar)({
    backgroundColor:"#8ab0ba"
  })



  return (
    <RedAppbar>
      <Toolbar>
        <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
        <Box component={"div"}>
        <Typography
          variant="h5"
          sx={{ letterSpacing: "2px", display: { xs: "none", sm: "block" } }}
        >
          EMPLOYEE APP
        </Typography>
        <Badge
          sx={{ fontSize: "35px", display: { xs: "block", sm: "none" } }}
        />
        </Box>
        <Box sx={{display:"flex"}}>
      <Typography
          variant="h5"
          sx={{ paddingRight:"25px", letterSpacing: "2px" }}
        >
         <Link href="/" underline="none" color={"inherit"} sx={{"&:hover":{color:"black"}}}>
  {'Home'}
</Link>
        </Typography>
        <Typography
          variant="h5"
          sx={{ letterSpacing: "2px" }}
        >
         <Link href="/employeereg" underline="none" color={"inherit"} sx={{"&:hover":{color:"black"}}}>
  {'Employee'}
</Link>
        </Typography>

      </Box>
      </Box>
      </Toolbar>
      
    </RedAppbar>
  );
}

export default Navbar