import React, { Component } from 'react';
import axios from 'axios';
import DataTable from '../ordersPage/dataTable';
import Table from 'react-bootstrap/Table';


class Assignto extends Component {
    constructor(props) {
        super(props);
        this.state={
            truck:[]
        }

    }

    componentDidMount() {
        axios.get('http://localhost:1000/assignto')
            .then(res => {
                this.setState({ 
                    isLoaded: true,
                    truck: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    dataTable() {
        return this.state.truck.map((res, i) => {
            return <DataTable obj={res} key={i} />;
        });
    }

    render() {
        return (
            <div className="table-wrapper">
            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <td>ID</td>
                        <td>ClientName</td>
                        <td>Orgin</td>
                        <td>Destination</td>
                        <td>Material</td>
                        <td>Weight</td>
                        <td>Price</td>
                        <td>PaymentStatus</td>
                        <td>AssignStatus</td>
                        <td>AssigntoDriver</td>
                        <td>AssignTotruck</td>
                        <td>LoadingDate</td>
                    </tr>
                </thead>
                <tbody>
                    {this.dataTable()}
                </tbody>
            </Table>
        </div>
        );
    }
}

export default Assignto;