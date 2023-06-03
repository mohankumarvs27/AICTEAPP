import React from 'react'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

function Bureaus() {
  return (
    <MDBCarousel showIndicators fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='/images/Homepage_Bureas_RIFD.JPG' alt='...' />
          <MDBCarouselCaption>
            <h5>Overview</h5>
            <p>An Overview of Bureaus and Cells.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='/images/Homepage_Bureas_Approvals.jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Approval</h5>
            <p>As defined in the AICTE act 1987, Technical Education means programmes of Education, Research, and training in Engineering and Technology, Architecture, Town Planning, Management, Pharmacy, and Applied Arts and Crafts, and such other programmes or areas as the Central Government may in consultation with the Council, by notification in the official gazette declare.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='/images/Homepage_Bureas_Policy.jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Policy & Academic Planning</h5>
            <p>Planning and framing of policies related to Academics for strengthening and improving quality of Technical Education</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='/images/Homepage_Bureaus_Administration.jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Administration</h5>
            <p>Administration consists of the performance or management of business operations and thus the making or implementing of major decisions. Administration can be defined as the universal process of organizing people and resources efficiently so as to direct activities toward common goals and objectives.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='/images/Homepage_Bureaus_Finance_0.jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Finance</h5>
            <p>Finance Bureau has been mandated to manage Finances (Funds) efficiently and effectively in such a manner as to accomplish the objectives of the organization by planning, monitoring, organizing, and controlling of the monetary resources of an organization.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default Bureaus