import React, { Component } from "react";

export class DropDownMenu extends Component {
    state = {
        isOpen: false,
    }

    toggle = () => this.setState((prevState) => ({isOpen: !prevState.isOpen}))

    render(){
        return(
            <div className="Dropdown">
                <button onClick={this.toggle}
                    type="button"
                    className="Dropdown__toggle"
                >Показати</button>
                <button onClick={() => this.setState({isOpen: false})}
                    type="button"
                    className="Dropdown__toggle"
                ></button>

                { this.state.isOpen && <div className="Dropdown__menu">Випадаюче меню</div> }
            </div>
        )
    }
}