import React, {Component} from 'react';
// import {connect} from 'react-redux';

class OldComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Subscribe'
        };
    }

    styles = {
        fontStyle: 'italic',
        color: 'purple'
    };

    ButtonChange = () => {
        this.setState({
            message: 'Thank you for subscribing'
        })
    };

    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>Subscribe</button>
            </div>
        );
    }
}

export default OldComp;