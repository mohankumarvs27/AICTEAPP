import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage,MDBBtn } from 'mdb-react-ui-kit';

export default function Cardo() {
  return (
      
    <MDBCard background='dark' className='text-white cardimg' style={{ minWidth: '340px' ,minHeight: '540px'}}>
      <MDBCardImage overlay src='/images/tn.jpg' alt='...' width='400px' height='540px' />
      <MDBCardOverlay>
        <MDBCardTitle>Towards Nation</MDBCardTitle>
        <MDBCardText><p>
        India is my country and all Indians are my brothers and sisters.</p><p> I love my country and I am proud of its rich and varied heritage.</p><p> I shall always strive to be worthy of it.</p>
        </MDBCardText>
        <MDBBtn tag='a' href='http://www.aicte-india.org/spledgenation.php'>Read in Detail</MDBBtn>
        
      </MDBCardOverlay>
    </MDBCard>  );
}