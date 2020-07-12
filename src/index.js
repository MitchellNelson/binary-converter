import React from 'react';
import ReactDOM from 'react-dom';

class Converter extends React.Component{
    constructor(){
        super();
        this.state ={
            binaryField: '',
            decimalField: ''
        };
        this.binaryToDecimal = this.binaryToDecimal.bind(this);
        this.decimalToBinary = this.decimalToBinary.bind(this);
    }

    binaryToDecimal(event){
        var enteredValue = event.target.value
        this.setState({binaryField: enteredValue});
        var digit = parseInt(enteredValue, 2);
        if (isNaN(digit)){
            digit = '0';
        }
        this.setState({decimalField: digit});
    }

    decimalToBinary(event){
        var enteredValue = event.target.value
        this.setState({decimalField: enteredValue});
        var binary = parseInt(enteredValue, 10).toString(2);
        if (isNaN(binary)){
            binary = '0';
        }
        this.setState({binaryField: binary});
    }

    render() {
        return (
            <div className="converter">
                <h1>Binary Value</h1>
                <input type="text" id="binaryField" value={this.state.binaryField} onChange={this.binaryToDecimal} placeholder="101..."/>
                <h1>Decimal Value</h1>
                <input type="text" id="decimalField" value={this.state.decimalField} onChange={this.decimalToBinary} placeholder="123..."/>
            </div>
        );
    }
}

ReactDOM.render(
    <Converter/>,
    document.getElementById('converter')
);