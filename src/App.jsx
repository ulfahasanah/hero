import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Home from './components/Home'
import Add from './components/Add'
import DetailHero from './components/DetailHero'
import MyTeam from './components/MyTeam'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar bg="light" variant="light">
                <Navbar.Brand > Playground </Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link> <Link to="/"> Home </Link> </Nav.Link>
                <Nav.Link> <Link to="/my-team"> My Team </Link> </Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/my-team">
                    <MyTeam></MyTeam>
                </Route>
                <Route path="/hero/:id">
                    <DetailHero></DetailHero>
                </Route>
                <Route path="/add">
                    <Add></Add>
                </Route>
                <Route path="/hero">

                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}