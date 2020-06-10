import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ADD_HEROES } from '../action/actionCreator'

export default function Add() {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [attr, setAttr] = useState("")
    const [roles, setRoles] = useState("")
    const [validated, setValidated] = useState("");
    const dispatch = useDispatch()
    const history = useHistory()

    function handleName(e) {
        setName(e.target.value)
    }

    function handleType(e) {
        setType(e.target.value)
    }

    function handleAttr(e) {
        setAttr(e.target.value)
    }

    function handleRoles(e) {
        setRoles(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(data, "masuk ga");
        
        if(!name || !attr || !type || !roles) { 
            setValidated(false)           
            console.log("falsee")
        } else  {
            setValidated(true)
            console.log("trueee")
            dispatch(ADD_HEROES(data))
            setName("")
            setType("")
            setAttr("")
            setRoles("")
            history.push("/")
        }
    }

    const data = {
        name,
        type,
        attr,
        roles: roles.split(",")
    }
    

    return (
        <Container>
            <Row>
                <Col md="8" className="mx-auto">
                    <Card className="mt-5">
                        <Card.Title className="ml-3 mt-2 mb-0">
                            Add new hero
                        </Card.Title>
                        <Button variant="link" className="ml-auto"> <Link to="/"> Go Back</Link> </Button>
                        {
                            validated === false ? 
                            <Alert variant="danger">
                                Please fill all input to add new hero!
                            </Alert> : ""
                        }
                        <Form className="mx-3" onSubmit={handleSubmit}>
                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Heroes Name</Form.Label>
                                <Form.Control type="text" placeholder="Heroes Name" value={name} onChange={handleName}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Heroes Type</Form.Label>
                                <Form.Control type="text" placeholder="Heroes Type" value={type} onChange={handleType}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Heroes Attr</Form.Label>
                                <Form.Control type="text" placeholder="Heroes Attribute" value={attr} onChange={handleAttr}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Heroes Roles</Form.Label>
                                <Form.Control type="text" placeholder="Heroes Roles" value={roles} onChange={handleRoles}/>
                            </Form.Group>
                        <Button type="submit" variant="dark"> Add new hero </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
