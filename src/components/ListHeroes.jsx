import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SET_TEAM } from '../action/actionCreator'
import useTeams from './useTeams'

export default function ListHeroes( {heroes} ) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { teams } = useTeams('http://localhost:3000/teams')

    return (
            <Col md="6" className="mx-auto">
                <Card className="mt-5">
                    <Col className="ml-3">
                        <Card.Title className="mt-2">
                            <Button variant="transparent" onClick={ () => history.push(`/hero/${heroes.id}`)}>
                                { heroes.name }
                            </Button>
                        </Card.Title>
                                {
                                heroes.roles.map((el, i) => {
                                    return (
                                        <Button key={i} variant="light" className="mr-3" disabled>
                                            {el}
                                        </Button>
                                    )
                                })
                            }
                    </Col>
                    {
                        teams.find(el => el.id === heroes.id) ? "" : 
                        <Button variant="dark" className="mt-1" onClick={() => dispatch(SET_TEAM(heroes))} disabled={teams.length >=5 ? true : false}> Add to my team </Button>
                    }
                </Card>
            </Col>
    )
}
