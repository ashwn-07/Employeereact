import React from 'react'
import Navbar from './Navbar'
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'

const Employeereg = () => {
  return (
    <>
   <Navbar/>


<Paper>
<Grid container spacing={2} sx={{ marginTop: '100px' }}>
  <Grid item xs={12} md={6} container alignItems="center">
    <Grid item xs={12} md={6}>
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}>
        <Typography variant="h6">Name</Typography>
      </Container>
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField variant="outlined" fullWidth  sx={{backgroundColor:"ButtonShadow"}} />
    </Grid>
  </Grid>

  <Grid item xs={12} md={6} container alignItems="center" >


    <Container   sx={{ marginLeft:"35px", width:"500px", padding:0 }}>
      <Grid container xs={12} md={12} alignItems="center" >
    <Grid item xs={12} md={2}>
      <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}>
        <Typography variant="h6">Designation</Typography>
      </Container>
    </Grid>
    <Grid item xs={12} md={10}>
      <TextField variant="outlined" fullWidth  sx={{backgroundColor:"ButtonShadow"}}/>
    </Grid>
    </Grid>
    </Container>

  </Grid>
</Grid>


<Grid container spacing={2} sx={{ marginTop: '5px' }}>
  <Grid item xs={12} md={6} container alignItems="center">
    <Grid item xs={12} md={6}>
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}>
        <Typography variant="h6">Salary</Typography>
      </Container>
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField variant="outlined" fullWidth sx={{backgroundColor:"ButtonShadow"}} />
    </Grid>
  </Grid>

  <Grid item xs={12} md={6} container alignItems="center" >


    <Container   sx={{ marginLeft:"35px", width:"500px", padding:0 }}>
      <Grid container xs={12} md={12} alignItems="center" >
    <Grid item xs={12} md={2}>
      <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}>
        <Typography variant="h6">Location</Typography>
      </Container>
    </Grid>
    <Grid item xs={12} md={10}>
      <TextField variant="outlined" fullWidth  sx={{backgroundColor:"ButtonShadow"}}/>
    </Grid>
    </Grid>
    </Container>

  </Grid>
</Grid>


  <Grid container>
    <Grid item xs={12} sm={12} md={12}>
    <Container  maxWidth='xs' sx={{display:'flex', justifyContent:"center", padding:"50px"}}>
        <Button  fullWidth variant="contained" color="success">Register</Button>
        </Container>
    </Grid>
  </Grid>

</Paper>
 </>
  )
}

export default Employeereg