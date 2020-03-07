import React, {Component} from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: 35
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let sizes = [35, 20, 12, 9];
        let nums = [7, 23, 60, 100];
        let f = (this.props.formula||'').length;
        let fs = sizes[nums.findIndex(n => f <= n)];
        if (f !== 0 && fs !== prevState.fontSize) {
            console.log("Setting fontSize ", fs);
            this.setState({fontSize: fs});
        }
    }

    render() {
        return (
            <div className={'display'}>
                <h1 style={{fontSize: this.state.fontSize + 'pt'}}>{this.props.formula}</h1>
            </div>
        );
    }
}

export default Display;
