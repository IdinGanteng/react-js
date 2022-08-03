import { Card,Row,Container,Col,Image } from "react-bootstrap";
import CAimage from "../asset/image/superheroes/CA.jpeg"
import SPDimage from "../asset/image/superheroes/SPD.png"
import SPRMNimage from "../asset/image/superheroes/SPRMN.jpg"

const superheroes=()=>{
    return(
  
      <div>
        <Container>
          <br />
          <h4 className="text-white">SUPER HEROES MOVIES</h4>
          <br/>
          <Row>
             <Col md={4} className="movieWrapper">
             <Card className="movieImage">
             <Image src={CAimage} alt="titanic" className="images" />
             <div className="bg-dark">
                              <div className="p-2 m-1 text-white">
                              <Card.Title className="text-center">CAPTAIN AMERICA</Card.Title>
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
             <Image src={SPDimage} alt="titanic" className="images" />
             <div className="bg-dark">
                              <div className="p-2 m-1 text-white">
                              <Card.Title className="text-center">SPIDER-MAN 4</Card.Title>
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
             <Col md={4} id="superheroes" >
             <Card className="movieImage">
             <Image src={SPRMNimage} alt="titanic" className="images" />
             <div className="bg-dark">
                              <div className="p-2 m-1 text-white">
                              <Card.Title className="text-center">SUPERMAN RETURN</Card.Title>
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
    
  
  
  export default superheroes;
  