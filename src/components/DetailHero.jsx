import React from 'react'
import { Col, Row, Card, Button, Container, Table } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import useHeroes from './useHeroes'

export default function DetailHero() {
    const { id } = useParams()
    const { heroes } = useHeroes("http://localhost:3000/heroes")

    function filterById () {
        return heroes.filter(el => {
        return el.id === +id
        })
    }

    return (
        <Container>
            <Col md="8" className="mx-auto">
                <Card className="mt-5">
                    <Row>
                        <Col className="ml-3">
                            <Card.Title className="mt-2">
                                Heroes
                            </Card.Title>
                            <Card.Text className="mb-2">
                                Detail of The Hero
                            </Card.Text>
                        </Col>
                        <Button variant="link" className="mr-3"> <Link to="/"> Go Back </Link> </Button>
                    </Row>
                    {
                        filterById().map(el => {

                            return <Table striped hover key={el.id}>
                                <tbody>
                                    <tr>
                                        <td className="text-muted">Hero Name</td>
                                        <td>{el.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-muted">Hero Attribute</td>
                                        <td>{el.attr}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-muted">Hero Type</td>
                                        <td>{el.type}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-muted">Hero Roles</td>
                                        <td>{
                                            el.roles.map((role, i) => {
                                                return (
                                                    <Button key={i} variant="light" className="mr-3" disabled>
                                                        {role}
                                                    </Button>
                                                )
                                            })
                                            }</td>
                                    </tr>
                                </tbody>
                            </Table>
                        })
                    }
                </Card>
            </Col>
        </Container>
    )
}
