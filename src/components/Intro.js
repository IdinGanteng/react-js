

import { Container, Row , Col,Button } from 'react-bootstrap';
const intro =() => {
    return(
        <div className='intro'>
        <Container className='text-black d-flex justify-content-center align-items-center'>
        <Row>
          <Col>
           <h1 className='title'>WELCOME TO IDIN FILM</h1>
           <div className='IntroButton nt-4 text-center '>
             <Button variant='dark'>LIST</Button>
           </div>
          </Col>
        </Row>
        </Container>
      </div>
    )
}

export default intro