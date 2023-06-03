import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { MDBContainer } from "mdb-react-ui-kit";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./MainFeaturedPost";
//import Header from '../../../Layout/Header/Header';
import { Typography } from "@mui/material";
//import Navbar from '../../../Layout/Header/Navbar'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import "./Scheme.css";

const mainFeaturedPost = {
  title: "Schemes",
  image: "/images/schemes.JPG",
  imageText: "main image description",
};
const FeaturedPost = {
  title: "",
  image: "/images/our_vision_bg.jpg",
  description:
    "“To be a world-class organization leading technological and socio-economic development of the country by enhancing the global competitiveness of technical manpower and by ensuring high quality technical education to all sections of the society.”",
};

const theme = createTheme();

function Schemes() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/*
    <Header />
  <Navbar />*/}
        <div className="body1"></div>
        <MDBContainer maxWidth="lg">
          <MainFeaturedPost post={mainFeaturedPost} />
          <Typography variant="p" className="about-title">
            Read about the initiatives undertaken by AICTE to promote technical
            education
          </Typography>
          <br />
          <br />

          <Card sx={{ maxWidth: 345, mr: 4 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/images/banner_0.jpg"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Approval
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prof. Rajendra B Kakde <br />
                Adviser -I
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The Approvals Bureau processes proposals for grant of approval
                for establishing a new technical institution or an integrated
                campus.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <div className="main">
            <Typography gutterBottom variant="h5" component="div">
              More Schemes
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <div className="item">
                <img
                  alt="article"
                  className="item-image"
                  src="/images/Schemepage1.jpg"
                  style={{ width: 200, height: 140 }}
                />
                <h3 className="item-head">Jal Shakti Abhiyan</h3>
                <p className="item-desc">
                  The scheme “Jal Shakti Abhiyan” with the theme, “Sanchay Jal
                  Behtar Kal”, has commenced from 1st July 2019 <br />
                  <span className="link_tag">Read more</span>
                </p>
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
              <div>
                <div className="item">
                  <img
                    alt="article"
                    className="item-image"
                    src="/images/Schemepage2.jpg"
                    style={{ width: 200, height: 150 }}
                  />
                  <h3 className="item-head">One Student One Tree</h3>
                  <p className="item-desc">
                    Hon’ble HRD Minister Dr. Ramesh Pokhriyal “Nishank” launched
                    a campaign “One Student One Tree” on 20th July. This
                    initiative is in line with the Hon’ble Prime Minister’s idea
                    of a green and healthy environment
                    <br />
                    <span className="link_tag">Read more</span>
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
              <div>
                <div className="item">
                  <img
                    alt="article"
                    className="item-image"
                    src="/images/Schemepage3.jpg"
                    style={{ width: 200, height: 130 }}
                  />
                  <h3 className="item-head">AICTE-UKEIRI 2020-21</h3>
                  <p className="item-desc">
                    UK India Education Research Initiative (UKIERI) was started
                    in April 2006 with the aim of enhancing educational links
                    between India and the United Kingdom.
                    <br />
                    <span className="link_tag">Read more</span>
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
              <div>
                <div className="item">
                  <img
                    alt="article"
                    className="item-image"
                    src="/images/Schemepage2.jpg"
                    style={{ width: 200, height: 130 }}
                  />
                  <h3 className="item-head">AICTE-UKEIRI 2020-21</h3>
                  <p className="item-desc">
                    UK India Education Research Initiative (UKIERI) was started
                    in April 2006 with the aim of enhancing educational links
                    between India and the United Kingdom.
                    <br />
                    <span className="link_tag">Read more</span>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
          <br />
          <MainFeaturedPost post={FeaturedPost} />
        </MDBContainer>
      </ThemeProvider>
    </div>
  );
}

export default Schemes;
