import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage , MDBBtn} from 'mdb-react-ui-kit';

export default function Cardn() {
  return (
      
    <MDBCard background='dark' className='text-white cardimg'style={{ minHeight: '540px' ,minWidth: '340px'}}>
      <MDBCardImage overlay src='/images/tcr.jpg' alt='...' width='300px' height='400px' />
      <MDBCardOverlay>
        <MDBCardTitle>Towards Child Rights</MDBCardTitle>
        <MDBCardText>
       <p> India is my country and all Indians are my brothers and sisters. I love my country and I am proud of its rich and varied heritage. I shall always strive to be worthy of it.</p>
      <p>I shall give respect to my parents, teachers and elders and treat everyone with courtesy.</p>

        <p>To my country and my people, I pledge my devotion. In their well being and prosperity alone, lies my happiness.</p>
        <MDBBtn tag='a' href='https://www.aicte-india.org/downloads/Child_rights.pdf#toolbar=0'>Read in Detail</MDBBtn>
        </MDBCardText>
      </MDBCardOverlay>
    </MDBCard>  );
}