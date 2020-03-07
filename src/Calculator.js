import React, {Component} from 'react';
import Display from "./Display";
import Button from "./Button";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formula: '',
            calculated: false
        };
    }

    updateFormula = (v, c) => {
        this.setState({formula: v, calculated: c});
    };

    render() {
        let buts = [['1', '2', '3', '+'], ['4', '5', '6', '-'], ['7', '8', '9', '*'], ['C', '0', '.', '/'], ['=']];
        let elements = buts.map((bc, i) => {
            let btnCont = [];
            bc.forEach((b, j) => btnCont.push(
                <Button key={j}
                        type={b}
                        formula={this.state.formula}
                        calculated={this.state.calculated}
                        update={this.updateFormula}/>
                )
            );
            return (
                <div key={i} className={'btn-container'}>{btnCont}</div>
            );
        });
        return (
            <div className={'container'}>
                <Display formula={this.state.formula}/>
                {elements}
            </div>
        );
    }
}

export default Calculator;
