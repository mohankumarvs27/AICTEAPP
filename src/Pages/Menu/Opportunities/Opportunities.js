import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { MDBContainer } from 'mdb-react-ui-kit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
//import Header from '../../../Layout/Header/Header';
import { Typography } from '@mui/material';
//import Navbar from '../../../Layout/Header/Navbar'
import Card0 from './card'
import Cardn from './cardn'
import { Grid } from '@mui/material';
import './Opportunities.css'

const mainFeaturedPost = {
  title: 'Opportunities',
  image: '/images/Opportunity%20%E2%80%93%20For%20student%20header.jpg',
  imageText: 'main image description',

  
};

const theme = createTheme();

function Opportunities() {
  return (
    <div><ThemeProvider theme={theme}>
    <CssBaseline />
    {/*
    <Header />
  <Navbar />*/}
    <div className='body1'></div>
    < MDBContainer maxWidth="lg">
      

      <MainFeaturedPost post={mainFeaturedPost} />
        <Typography variant="p" className='about-title' align='justify'>The word student is etymologically derived through Middle English from the Latin second-type conjugation verb studēre, meaning "to direct one's zeal at"; hence a student could be described as "one who directs zeal at a subject". In its widest use, student is used for anyone who is learning.</Typography><br /><br />
        <h3>Learning and Growing</h3><br/>
        <Typography variant="p" align='justify'>Learning is acquiring new knowledge, behaviors, skills, values or preferences. It may involve processing different types of information. Learning functions can be performed by different brain learning processes, which depend on the mental capacities of learning subject/agent, the type of knowledge which has to be acquitted, as well as on socio-cognitive and environmental circumstances.</Typography><br/><br/>

        <Typography variant="p" align='justify'>Human learning may occur as part of education or personal development. It may be goal-oriented and may be aided by motivation. The study of how learning occurs is part of neuropsychology, educational psychology, learning theory, and pedagogy.</Typography><br/><br/>
        <Typography variant="p" align='justify'>Learning may occur as a result of habituation or classical conditioning, seen in many animal species, or as a result of more complex activities such as play, seen only in relatively intelligent animals and humans. Learning may occur consciously or without conscious awareness. There is evidence for human behavioral learning prenatally, in which habituation has been observed as early as 32 weeks into gestation, indicating that the central nervous system is sufficiently developed and primed for learning and memory to occur very early on in development.</Typography><br/><br/>
        <p>
        India is my country and all Indians are my brothers and sisters. I love my country and I am proud of its rich and varied heritage. I shall always strive to be worthy of it.</p>

        <p>I shall give respect to my parents, teachers and elders and treat everyone with courtesy.</p>

        <p>To my country and my people, I pledge my devotion. In their well being and prosperity alone, lies my happiness.
        </p>
        <div className='carde' >
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>  
        < Card0 className='card0'/></Grid>
        <Grid item xs={12} md={6}>
        <Cardn/></Grid>
        </Grid>
        </div>
        
    </ MDBContainer>
    
  </ThemeProvider></div>
  )
}

export default Opportunities