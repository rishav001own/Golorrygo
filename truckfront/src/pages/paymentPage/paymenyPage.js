import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios'


class paymenyPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            truck:[]
        }

    }

    componentWillMount() {
        axios.get('')

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}


export default paymenyPage;