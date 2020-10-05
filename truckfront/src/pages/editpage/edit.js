import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class edit extends Component {
    constructor(props){
        super(props);

        this.onChangeAssignToDriver=this.onChangeAssignToDriver.bind(this);
        this.onChangeAssignToTruck=this.onChangeAssignToTruck.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            assigntodriver: "",
            assigntotruck: ""
        }
    }
    // componentDidMount(){
    //     axios.get('http://localhost:1000/edit-link/'+this.props.match.params.id)
    //     .then(res=>{
    //         this.setState=({
    //             assigntodriver:res.data.assigntodriver,
    //             assigntotruck:res.data.assigntotruck
    //         });
    //     })
    //     .catch((error)=>console.log(error))
    // }

    onChangeAssignToDriver(e){
        this.setState({assigntodriver: e.target.value})
    }
    onChangeAssignToTruck(e){
        this.setState({assigntotruck: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const editorder={
            assigntodriver: this.state.assigntodriver,
            assigntotruck: this.state.assigntotruck
        }

        var s=this.props.location.pathname;

        var final = s.substr(s.lastIndexOf('/') + 1);
    axios.put('http://localhost:1000/editorder/'+ final,editorder)
    .then((res)=>{
    console.log(res.data)
    console.log('assingedsuccessfully')
    })
    .catch((error)=>console.log(error))
    //redirecttosubmit
    this.props.history.push('/allorders')
    }
    
    
    render() {
        return (
            <div className='form-wrapper'>
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="AssignToDriver">
                    <Form.Label>AssignToDriver</Form.Label>
                    <Form.Control type="text" value={this.state.assigntodriver}  onChange={this.onChangeAssignToDriver}></Form.Control>
                </Form.Group>
                <Form.Group controlId="AssignToTruck">
                    <Form.Label>AssignToTruck</Form.Label>
                    <Form.Control type="text" value={this.state.assigntotruck}  onChange={this.onChangeAssignToTruck}></Form.Control>
                </Form.Group> 
                <Button variant='danger' size='lg' block='block' type="submit">
                    Edit
                </Button> 
            </Form>
            </div>
        );
    }
}

export default edit;