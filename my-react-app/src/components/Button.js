import React, { Component } from 'react';

class Button extends Component {

    handleClick(){
        console.log('Show Menu')
        this.props.whenClick();
    }
    
    render() {
        return (
            <button onClick={this.handleClick.bind(this)} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.props.caption}
            </button>
        );
    }
}

export default Button;