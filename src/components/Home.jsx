import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import useHeroes from './useHeroes'
import ListHeroes from './ListHeroes'
import { Link } from 'react-router-dom'

export default function Home() {
    const { heroes } = useHeroes('http://localhost:3000/heroes')
    
    return(
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
                                    List of Heroes
                                </Card.Text>
                            </Col>
                            <Button variant="link" className="mr-3 mt-1 text-muted"> <Link to="/add">Add new hero</Link> </Button>
                        </Row>
                    </Card>
                    <Row>
                       {
                           heroes && heroes.map(el => {
                               return (
                               <ListHeroes
                                key={el.id}
                                heroes={el}
                               />
                               )
                           })
                       }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}