import React from 'react'
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import './scheme.css'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';



function Schemes() {
  return (
    <div className='schemescard'>
    <Grid container spacing={2}>
    <Grid item xs={6} md={4}>
    <Card>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="/images/Homepage--PMSS_0.JPG"
    />
    <CardContent>
     
      <Typography variant="body2" color="text.secondary">
      Schemes
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Prime Minister's Special Scholarship Scheme (PMSSS).
      </Typography>
    </CardContent>
    <Button size="small">Learn More</Button>
    </Card>
    </Grid>
    <Grid item xs={6} md={4}>
    <Card>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="/images/Homepage--UnnatBharatInitiative_0.jpg"
    />
    <CardContent>
     
      <Typography variant="body2" color="text.secondary">
      Schemes
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Prime Minister's Special Scholarship Scheme (PMSSS).
      </Typography>
    </CardContent>
    <Button size="small">Learn More</Button>
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="/images/aslapbanner.jpg"
    />
    <CardContent>
     
      <Typography variant="body2" color="text.secondary">
      Schemes
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Prime Minister's Special Scholarship Scheme (PMSSS).
      </Typography>
    </CardContent>
    <Button size="small">Learn More</Button>
    </Card>
    </Grid>
    </Grid>
    </div>
  
  )
}

export default Schemes