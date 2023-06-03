import React from 'react'
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import { Grid, Paper } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box } from '@mui/system';


function Services() {
  return (
    <div>
    <h3>Schemes</h3>  
    <Grid container spacing={2}>
    
    <Grid item xs={12} md={3}>
    <MDBCard>
      <MDBCardBody>
        <div style={{ display: 'flex' }}>
        <WorkspacePremiumIcon/><h6>National e-Scholarship</h6>
        </div>
        <MDBCardText> National e-Scholarship is the one-stop solution to help students seek various scholarships.</MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Grid>

    <Grid item xs={12} md={3}>
    <MDBCard>
      <Paper >
        <Box p={2} style={{  }}>
        <div style={{ display: 'flex' }}>
        <WorkspacePremiumIcon/><h6>Vidya Lakshmi</h6>
        </div>
        <div p={2}>
        <MDBCardText>Vidya Lakshmi is a first-of-its-kind portal for students seeking educational loan.</MDBCardText>
        </div>
        </Box>
      </Paper>
    </MDBCard>
    </Grid>

    <Grid item xs={12} md={3}>
    <MDBCard>
      <MDBCardBody>
        <div style={{ display: 'flex' }}>
        <WorkspacePremiumIcon/><h6>Pragati and Saksham</h6>
        </div>
        <MDBCardText>Scholarship for girls under the Pragati Scheme and scholarship under Saksham Scheme. </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Grid>

    <Grid item xs={12} md={3}>
    <MDBCard>
      <MDBCardBody>
        <div style={{ display: 'flex' }}>
        <WorkspacePremiumIcon/><h6>India Innovation Initiative</h6>
        </div>
        <MDBCardText>India's largest innovation challenges jointly promoted by the CII and Department of Science & Technology.</MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Grid>
    
    </Grid></div>
  )
}

export default Services