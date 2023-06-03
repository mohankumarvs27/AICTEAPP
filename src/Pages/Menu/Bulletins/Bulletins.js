import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { MDBContainer } from 'mdb-react-ui-kit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
//import Header from '../../../Layout/Header/Header';
import { Typography } from '@mui/material';
//import Navbar from '../../../Layout/Header/Navbar'
import { MDBBtn} from 'mdb-react-ui-kit';

const mainFeaturedPost = {
  title: 'Bulletins',
  image: '/images/bulletins.jpg',
  imageText: 'main image description',

  
};
const FeaturedPost = {
  title: '',
  image: '/images/our_vision_bg.jpg',
  description: '“To be a world-class organization leading technological and socio-economic development of the country by enhancing the global competitiveness of technical manpower and by ensuring high quality technical education to all sections of the society.”',
  
};

const theme = createTheme();


function Bulletins() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {/*
        <Header />
  <Navbar />*/}
        <div className='body1'></div>
        < MDBContainer maxWidth="lg">
          

          <MainFeaturedPost post={mainFeaturedPost} />
            <Typography variant="p" className='about-title'>Read about the initiatives undertaken by AICTE to promote technical education</Typography><br />
            <Typography variant="h3" component="h3">Announcements</Typography><br />
            <a href='https://www.aicte-india.org/sites/default/files/Final_Last_Date_Extension_MooC.pdf'>
            Extension of the Last Date for Expression of Interest (EOI) for Development of Self-Paced/Credit Courses for the SWAYAM Platform
            </a><hr/>
            <a href='https://aicte-india.org/sites/default/files/Report_Fee_Committee.pdf'>National fee committee report and sub-committee report</a><hr/>
            <a href='https://www.aicte-india.org/sites/default/files/Updated%20Public%20Notice.pdf'>Updated Public notice for IDEA Lab Scheme AICTE</a><hr/>
            <a href='https://www.aicte-india.org/sites/default/files/IKS%20invite%20%281%29.pdf'>Invitation of Release of text book on Indian Knowledge System on 16th May, 2022 by Sh Dharmendra Pradhan ji Hon'ble Education Minster MoE</a><hr/>
            <a href='https://www.aicte-india.org/sites/default/files/Final%20Document_Gifted%20Children%20Scheme%20.pdf'>Eligibility criteria for the students seeking admission under the supernumerary quota for gifted children</a><hr/>
            <a href='https://aicte-india.org/sites/default/files/Extension%20Public%20Notice%20for%20News%20Paper%20English%20and%20Hindi%20%282%29.pdf'>Last date for submission of online application is extended till 2nd May, 2022 (midnight) and with penalty for existing Institutes till 7th May, 2022 (midnight) for Approval Process 2022-23</a><hr/>
            <a href='https://www.aicte-india.org/sites/default/files/Public%20Notice_4.pdf'>Updated Public Notice in the wake of unauthorised use of name and logo of AICTE IDEA-Lab .</a><hr/>
            <a href='https://aicte-india.org/sites/default/files/Public%20Notice_3.pdf'>Public Notice in the wake of unauthorised use of name and logo of AICTE IDEA-Lab .</a><hr/>
            <a href='https://www.aicte-india.org/sites/default/files/Extension%20Public%20Notice.pdf'>Public Notice for Extension of last date for application for approval process 2022-23</a><hr/>
            <a href='https://www.aicte-india.org/sites/default/files/Public%20Notice%20for%20website%20English%20and%20Hindi%20%281%29%20%281%29.pdf#overlay-context='>Public Notice for Approval Process 2022-23</a><hr/>
            <MDBBtn>Read More</MDBBtn><br/><br/>
            <MainFeaturedPost post={FeaturedPost} />
        </ MDBContainer>
        
      </ThemeProvider>
  )
}

export default Bulletins