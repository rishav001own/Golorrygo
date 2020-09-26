import React, { Component } from 'react';

class dataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.clientname}
                </td>
                <td>
                    {this.props.obj.origin}
                </td>
                <td>
                    {this.props.obj.destination}
                </td>
                <td>
                    {this.props.obj.material}
                </td>
                <td>
                    {this.props.obj.weight}
                </td>
                <td>
                    {this.props.obj.price}
                </td>

                <td>
                    {this.props.obj.paymentstatus}
                </td>
                <td>
                    {this.props.obj.assignstatus}
                </td>
                <td>
                    {this.props.obj.assigntodriver}
                </td>
                <td>
                    {this.props.obj.assigntotruck}
                </td>
                <td>
                    {this.props.obj.loadingdate}
                </td>
            </tr>
        );
    }
}

export default dataTable;