import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';


const Teams = (props) => {
          const team = props.team;
          const { strTeam, strTeamBadge, idLeague} = team;
          let history = useHistory();
          const ShowLeagueInfo = (idLeague) => {
                   history.push(`/teamDetails/${idLeague}`);
          }
          
          return (
                    <Container>
                         <Row>
                              <Col xs={12} md={6} lg={4}>
                                        <Card className="card_component shadow" style={{ width: '18rem' , height: '18rem' }}>
                                                  <Card.Img className="image" variant="top" src={strTeamBadge} />
                                                  <Card.Body>
                                                            <Card.Title>{strTeam}</Card.Title>
                                                            <Card.Text>
                                                                      SportType : FootBall
                                                            </Card.Text>
                                                            <Button onClick={() => ShowLeagueInfo(idLeague)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                                                  </Card.Body>
                                        </Card>
                              </Col>
                         </Row>
                    </Container>

          );
};

export default Teams;