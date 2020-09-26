import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class createOrder extends Component {
    constructor(props){
        super(props)

        //set state
        this.state={
            clientname:"",
            origin: "",
            destination: "",
            material: "",
            weight: "",
            price: "",
            paymentstatus: "undone",
            assignstatus: "undone",
            assigntodriver: "",
            assigntotruck: "",
            loadingdate: ""
        }
    }
    onChangeClientName=(e)=> {
        this.setState({ clientname: e.target.value })
    }
    onChangeOrigin=(e)=> {
        this.setState({ origin: e.target.value })
    }
    onChangeDestination=(e)=> {
        this.setState({ destination: e.target.value })
    }
    onChangeMaterial=(e)=> {
        this.setState({ material: e.target.value })
    }
    onChangeWeight=(e)=> {
        this.setState({ weight: e.target.value })
    }
    onChangePrice=(e)=> {
        this.setState({ price: e.target.value })
    }
    onChangePaymentStatus=(e)=> {
        this.setState({ paymentstatus: e.target.value })
    }
    onChangeAssignStatus=(e)=> {
        this.setState({ assignstatus: e.target.value })
    }
    onChangeAssignToDriver=(e)=> {
        this.setState({ assigntodriver: e.target.value })
    }
    onChangeAssignToTruck=(e)=> {
        this.setState({ assigntotruck: e.target.value })
    }
    onChangeLoadingDate=(e)=> {
        this.setState({ loadingdate: e.target.value })
    }
    onSubmit=(e)=>{
        e.preventDefault()

        const orderObject = {
            clientname:this.state.clientname,
            origin: this.state.origin,
            destination: this.state.destination,
            material: this.state.material,
            weight: this.state.weight,
            price: this.state.price,
            paymentstatus: this.state.paymentstatus,
            assignstatus: this.state.assignstatus,
            assigntodriver: this.state.assigntodriver,
            assigntotruck: this.state.assigntotruck,
            loadingdate: this.state.loadingdate
        }
        axios.post('http://localhost:1000/createorders',orderObject)
        .then(res => console.log(res.data));

        this.setState({
            clientname:"",
            origin: "",
            destination: "",
            material: "",
            weight: "",
            price: "",
            paymentstatus: "undone",
            assignstatus: "undone",
            assigntodriver: "",
            assigntotruck: "",
            loadingdate: ""
        });
    }

    render() {
        return (
            <div className="form-wrapper">
            <h1>Create Client Order</h1>
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="ClientName">
                    <Form.Label>ClientName</Form.Label>
                    <Form.Control type="text" value={this.state.clientname}  onChange={this.onChangeClientName}></Form.Control>
                </Form.Group>
                <Form.Group controlId="Orgin">
                    <Form.Label>Orgin</Form.Label>
                    <Form.Control type="text" value={this.state.origin}  onChange={this.onChangeOrigin}></Form.Control>
                </Form.Group>
                <Form.Group controlId="Destination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" value={this.state.destination}  onChange={this.onChangeDestination}></Form.Control>
                </Form.Group>
                <Form.Group controlId="Material">
                    <Form.Label>Material</Form.Label>
                    <Form.Control type="text" value={this.state.material}  onChange={this.onChangeMaterial}></Form.Control>
                </Form.Group>
                <Form.Group controlId="Weight">
                    <Form.Label>Weight (in Kg)</Form.Label>
                    <Form.Control type="text" value={this.state.weight}  onChange={this.onChangeWeight}></Form.Control>
                </Form.Group>
                <Form.Group controlId="Price">
                    <Form.Label>Price in (Rs)</Form.Label>
                    <Form.Control type="text" value={this.state.price}  onChange={this.onChangePrice}></Form.Control>
                </Form.Group>
                <Form.Group controlId="PaymentStatus">
                    <Form.Label>PaymentStatus</Form.Label>
                    <Form.Control type="text" value={this.state.paymentstatus}  onChange={this.onChangePaymentStatus}></Form.Control>
                </Form.Group>
                <Form.Group controlId="AssignStatus">
                    <Form.Label>AssignStatus</Form.Label>
                    <Form.Control type="text" value={this.state.assignstatus}  onChange={this.onChangeAssignStatus}></Form.Control>
                </Form.Group>
                <Form.Group controlId="AssignToDriver">
                    <Form.Label>AssignToDriver</Form.Label>
                    <Form.Control type="text" value={this.state.assigntodriver}  onChange={this.onChangeAssignToDriver}></Form.Control>
                </Form.Group>
                <Form.Group controlId="AssignToTruck">
                    <Form.Label>AssignToTruck</Form.Label>
                    <Form.Control type="text" value={this.state.assigntotruck}  onChange={this.onChangeAssignToTruck}></Form.Control>
                </Form.Group>
                <Form.Group controlId="LoadingData">
                    <Form.Label>LoadingData</Form.Label>
                    <Form.Control type="text" value={this.state.loadingdate}  onChange={this.onChangeLoadingDate}></Form.Control>
                </Form.Group>
                <Button variant="danger" size="lg" block="block" type="submit">
                 Submit Data
                 </Button>
            </Form>
                
            </div>
        );
    }
}

export default createOrder;