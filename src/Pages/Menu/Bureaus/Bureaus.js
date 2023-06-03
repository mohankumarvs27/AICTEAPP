import React from 'react'
//import Header from '../../../Layout/Header/Header'
//import Navbar from '../../../Layout/Header/Navbar'
import { Container } from "react-bootstrap"
import { Typography } from '@mui/material';
import MainFeaturedPost from './MainFeaturedPost';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';



const mainFeaturedPost = {
  title: 'Bureaus',
  image: '/images/bureau%20-overview_0.jpg',
  
};


function Bureaus() {
  return (
    <div>
      
      {/*<Header/>
      <Navbar />*/}
      <div className='body1'></div>
      <Container><MainFeaturedPost post={mainFeaturedPost} />
            <Typography variant="p" className='about-title'>The organization structure of the AICTE comprises of the following bureaus</Typography><br />
            <div className='body1'></div>
    <Grid container spacing={2}>
    <Grid item xs={12} md={4}>
    <Card sx={{  }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/bureau2.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Approval
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Prof. Rajendra B Kakde <br/>Adviser -I
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Approvals Bureau processes proposals for grant of approval for establishing a new technical institution or an integrated campus.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    
    <Grid item xs={12} md={4}>
    <Card sx={{  }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/images/bureau1_0.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Policy & Academic Planning
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dr Ramesh Unnikrishnan <br/>Adviser -II
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Special Cell for Research & Coordination with State Govt./UTs. and others coordinates and integrates development of technical education.
          </Typography>
        </CardContent>
        <CardActions>
          
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>

      <Grid item xs={12} md={4}>
      <Card sx={{}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/images/administration%20thumbnail.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          ADMINISTRATION
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Smt Gujju Manushree<br/>Director
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Administration Bureau nominates AICTE representatives on various bodies and committees, along with providing logistic support for conducting meetings and trainings for all the staff of the Council.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>

      <Grid item xs={12} md={4}>
      <Card sx={{  }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/images/bureau1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          FINANCE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sh. Ravinder Singh <br/>Director
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Finance Bureau owns drawing and disbursement of planned and non-planned accounts, along with the management of cash and bills.
          </Typography>
        </CardContent>
        <CardActions>
          
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
            
            {/* 
            <Typography variant="h2">Gallery</Typography>
            <Typography>
            Videos
            </Typography>
            <MainFeaturedPost post={FeaturedPost} /><MainFeaturedPost post={FeaturedPost} /><MainFeaturedPost post={FeaturedPost} />*/}
            
            </Container></div>
  )
}

export default Bureaus