import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './Teams.css';
const Teams = (props) => {
          const team = props.team;
          const { strTeam, strTeamBadge } = team;
          return (

                    <Container>
                              <Row >
                                        <Col xs={12} md={6} lg={4} >
                                                  <Card className="card_component" style={{ width: '18rem' }}>
                                                            <Card.Img className="imgStyle" variant="top" src={strTeamBadge} />
                                                            <Card.Body>
                                                                      <Card.Title>{strTeam}</Card.Title>
                                                                      <Card.Text>
                                                                                SportType : FootBall
                                                                      </Card.Text>
                                                                      <Button variant="primary">Explore</Button>
                                                            </Card.Body>
                                                  </Card>
                                        </Col>

                              </Row>
                    </Container>
                    // <div style={{ display: "flex", maxWidth: '30%' }}>
                    //           <Card className="card_component" style={{ width: '18rem' }}>
                    //                     <Card.Img className="imgStyle" variant="top" src={strTeamBadge} />
                    //                     <Card.Body>
                    //                               <Card.Title>{strTeam}</Card.Title>
                    //                               <Card.Text>
                    //                                         SportType : FootBall
                    //                               </Card.Text>
                    //                               <Button variant="primary">Explore</Button>
                    //                     </Card.Body>
                    //           </Card>
                    // </div>
          );
};

export default Teams;