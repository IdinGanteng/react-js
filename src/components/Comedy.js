import{Card, Container, Row, Col, Image} from "react-bootstrap";
import Koalaimage from "../asset/image/comedy/koala.jpg"
import Okbimage from "../asset/image/comedy/okb.jpg"
import Warkopimage from "../asset/image/comedy/warkopimage.jpeg"



const Comedy=()=>{
  return(

    <div>
      <Container>
        <br />
        <h4 className="text-white">COMEDY MOVIES</h4>
        <br/>
        <Row>
           <Col md={4} className="movieWrapper" id="comedy">
           <Card className="movieImage">
           <Image src={Koalaimage} alt="titanic" className="images" />
           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">KOALA KUMAL</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional content.
                            </Card.Text >
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
           </div>
           </Card>
           </Col>
           <Col md={4} className="movieWrapper">
           <Card className="movieImage">
           <Image src={Okbimage} alt="titanic" className="images" />
           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">ORANG KAYA BARU</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional content.
                            </Card.Text >
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
           </div>
           </Card>
           </Col>
           <Col md={4} >
           <Card className="movieImage">
           <Image src={Warkopimage} alt="titanic" className="images" />
           <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">WARKOP DKI REBORN</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional content.
                            </Card.Text >
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
           </div>
           </Card>
           </Col>
        </Row>
      </Container>
    </div>
  )
  }
  


export default Comedy;
