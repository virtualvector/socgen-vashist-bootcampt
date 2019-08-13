import React, { Component } from 'react';
import Button from './Button';
class Dropdown extends Component {

    constructor(){
        super();
        this.state = {
            show: false,
            todos: [],
            buttonCaption: 'Select Todos'
        }
    }

    componentWillMount() {
        console.log('CWM .. init code')
        fetch('http://localhost:3003/todos/')
        .then((res)=> res.json())
        .then(data =>{
            console.log(data)
            this.state.todos = data
        })
    }

    toggleMenu(){
        console.log('In parent component');
        this.setState({show: !this.state.show})
        console.log(this.state.show)
    }

    changeCaption(input){
        console.log('change caption', input)
        this.setState({buttonCaption: input, show:false})
    }
   
    render() {

        var list = this.state.todos.map((todo, i)=> <a key={i} className="dropdown-item" href="#" onClick={this.changeCaption.bind(this, todo.text)}>{todo.text}</a>)
        return (
            <div className="dropdown">
            <Button caption={this.state.buttonCaption} whenClick={this.toggleMenu.bind(this)} ></Button>
            <div className={this.state.show?'dropdown-menu show': 'dropdown-menu'} aria-labelledby="dropdownMenuButton">
               {list}
            </div>
            </div>
        );
    }
}

export default Dropdown;