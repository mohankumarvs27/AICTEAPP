import React from "react";
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import { Grid } from "@mui/material";

function Quicklink() {
  return (
    <>
      <h3 id="lk">Quicklink</h3>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>Student Learning Assessment-PARAKH</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>AICTE-AI Language Translation Tool</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>Approval Process 2022-23</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>Academic Leaders' Conclave</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>ODL and Online Regulatory Framework</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>AICTE J&K Internship Portal</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
      </Grid>
    </>
  );
}

export default Quicklink;
