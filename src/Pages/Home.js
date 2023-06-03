import React from "react";
// import Header from '../Layout/Header/Header'
//import App from '../Layout/Header/Header1'
// import Menu from '../Layout/Header/Navbar'
import Carousel from "../Layout/Content/Carousel";
import Footer from "../Layout/Footer/Footer";
import Quicklink from "../Components/Content/Quicklink";
import News from "../Components/Content/News";
import Bureaus from "../Components/Content/Bureaus";
import Schemes from "../Components/Content/Schemes";
import Services from "../Components/Content/Services/Services";
//import More from '../Components/Content/More'
import { MDBContainer } from "mdb-react-ui-kit";
//import Nav from '../Layout/Navbar/Index'

function Home() {
  return (
    <div>
      <br />
      {/*
      <Header/>
      <Menu/>*/}
      <div>
        <Carousel />
        <MDBContainer>
          <Quicklink />
          <br />
          <News />
          <br />
          <Bureaus />
          <br />
          <Schemes />
          <br />
          <Services />
        </MDBContainer>
        {/*
  <More />*/}
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
