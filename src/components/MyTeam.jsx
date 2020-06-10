import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import useTeams from './useTeams'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DELETE_TEAM } from '../action/actionCreator'

export default function MyTeam() {
    const { teams } = useTeams('http://localhost:3000/teams')
    const dispatch = useDispatch()

    return (
        <Container>
        <Row>
            <Col md="8" className="mx-auto">
                <Card className="mt-5">
                    <Row>
                        <Col className="ml-3">
                            <Card.Title className="mt-2">
                                Heroes
                            </Card.Title>
                            <Card.Text className="mb-2 text-muted">
                                List of Heroes added to the team
                            </Card.Text>
                        </Col>
                        <Button variant="link" className="mr-3 mt-1 text-muted"> <Link to="/">Go Back</Link> </Button>
                    </Row>
                </Card>
                <Row>
                   {
                       teams && teams.map(el => {
                           return (
                            <Col md="6" className="mx-auto">
                                <Card className="mt-5">
                                    <Col className="ml-3">
                                        <Card.Title className="mt-2">
                                                { el.name }
                                        </Card.Title>
                                                {
                                                el.roles.map((role, i) => {
                                                    return (
                                                        <Button key={i} variant="light" className="mr-3" disabled>
                                                            {role}
                                                        </Button>
                                                    )
                                                })
                                            } 
                                    </Col>
                                    <Button variant="dark" className="mt-1" onClick={() => dispatch(DELETE_TEAM(el.id))}> Delete from my team </Button>
                                </Card>
                            </Col>
                           )
                       })
                   }
                </Row>
            </Col>
        </Row>
    </Container>
    )
}
