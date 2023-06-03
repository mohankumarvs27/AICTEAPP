import React from 'react'
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import { Grid } from '@mui/material';

function News() {
  return (
    <div>
        <h3 id='lk'>Announcement</h3>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>Academic Calendar 2022-23</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </Grid>
          <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText> Approved Institutions/Universities.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </Grid>
          <Grid item xs={6} md={4}> 
        <MDBCard>
            <MDBCardBody>
              <MDBCardText>Public Notice for Approval Process 2022-231</MDBCardText>
            </MDBCardBody>
        </MDBCard>
          </Grid >
          <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText> Expression of Interest (EOI) for Development of Self-Paced/Credit Courses for the SWAYAM Platform</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </Grid>
          <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>Updated Public Notice in the wake of unauthorised use of name and logo of AICTE IDEA-Lab .</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </Grid>
          <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>eligibility criteria for the students seeking admission under the supernumerary quota for gifted children</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </Grid>
          
          </Grid>
      </div>
  )
}

export default News