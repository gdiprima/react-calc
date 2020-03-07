import React, {Component} from 'react';

class Button extends Component {
    keyPressed = (e) => {
        if (e.key === this.props.type) {
            this.btnClick(e.key);
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.keyPressed, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyPressed, false);
    }

    btnClick = (id) => {
        let calculated = this.props.calculated;
        let formula = (calculated && !isNaN(id)) ? '' : (this.props.formula||'');
        //console.log('Button clicked: ', id);
        try {
            if (id === 'C') {
                formula = '';
                calculated = false;
            } else if (id === '=') {
                formula = eval(formula);
                calculated = true;
            } else {
                formula += id;
                calculated = false;
            }
        } catch (e) {
            console.log("Error: ", e);
            formula = "ERROR";
            calculated = true;
        }
        //console.log("Result: ", formula);
        this.props.update(formula, calculated);
    };

    render() {
        return (
            <div className={'button'}
                 id={this.props.type}
                 onClick={(e) => this.btnClick(e.currentTarget.id)}
            >
                <h3>{this.props.type}</h3>
            </div>
        );
    }
}

export default Button;
