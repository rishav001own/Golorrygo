import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Button} from "@material-ui/core";
import './homePage.css';


class homePage extends Component {
    render() {
        return (
            <div className="Nav">
                <h1>GuptaJi Electronic Platform Web Management </h1>
                <div className="RouteBox">
                <Button>
                <Box color="white" css={{ bgcolor: 'palevioletred', p: 1, textTransform: 'uppercase' }}>
                ViewAssigns
                </Box>
                </Button>
                <Button>
                <Box color="white" css={{ bgcolor: 'red', p: 2, textTransform: 'uppercase' }}>
                ViewOrders
                </Box>
                </Button>
                <Button>
                <Box color="white" css={{ bgcolor: 'blue', p: 3, textTransform: 'uppercase' }}>
                ViewPayments
                </Box>
                </Button>
                </div>
            </div>
        );
    }
}

export default homePage;