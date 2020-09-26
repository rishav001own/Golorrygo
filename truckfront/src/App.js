import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Assigned from './pages/viewTruck/AssignEd';
import Assignto from './pages/viewTruck/AssignTo';
import UndonePaymentPage from './pages/paymentPage/undonePaymentPage';
import DonePaymentPage from './pages/paymentPage/donePaymentPage';
import Order from './pages/ordersPage/order';
import CreateOrder from './pages/homePage/createOrder';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  Golorry GuptaJi's trucks Eletronic Platform Management Web
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/"} className="nav-link">
                    CreateOrder
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/allorders"} className="nav-link">
                     ViewOrder
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/undonepayment"} className="nav-link">
                     PayeeLeft
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/donepayment"} className="nav-link">
                     PayeePaid
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/assignto"} className="nav-link">
                     ViewAssignLeft
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/assigned"} className="nav-link">
                     ViewAssigned
                  </Link>
                </Nav>

              </Nav>
            </Container>
          </Navbar>
        </header>
        <Row>
          <Col>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateOrder} />
                <Route path="/allorders" component={Order}/>
                <Route path="/undonepayment" component={UndonePaymentPage}/>
                <Route path="/donepayment" component={DonePaymentPage}/>
                <Route path="/assignto"  component={Assignto}/>
                <Route path="/assigned"  component={Assigned}/>
              </Switch>
            </div>
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;
