import React, { Component } from "react";
import './Counter.css';
import { Buttons } from "./Buttons";

// export function Counter(){
    
// }

export class Counter extends Component {
    static defaultProps = {
        initialValue: 0
    };

    state = {
        value: this.props.initialValue,
    }

    handleIncrement = (event) => {
        // console.log(event.type);
        // console.log('Клікнули на збільшити на 1')
        this.setState((prevState) => {
            
        })
    }
    handleDecrement = (event) => {
        // console.log('Клікнули на зменшити на 1')
    }

    render(){ 
        return(
            <div className="Counter Counter__controls">
                <span className="Counter__value">{this.state.value}</span>
                <Buttons onIncrement = {this.handleIncrement}
                         onDecrement = {this.handleDecrement}
                />
            </div>
        )
    }
}