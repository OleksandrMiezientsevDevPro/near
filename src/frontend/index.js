import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App'

class AppBuilder extends Component {
    render() {
        return (
            <BrowserRouter>
                <App contract={this.props.contract} wallet={this.props.wallet} />
            </BrowserRouter>
        )
    }

}

export default AppBuilder