import React, { Component } from 'react';
import ListItem from './ListItem';


class Welcome extends Component {

    constructor(){
        super();
        this.state = {
            count: 1, 
            todos: [
                {text: 'Go for lunch', isDone: true},
                {text: 'buy some gifts', isDone: false},
                {text: 'go home on monday!!', isDone: false}
            ]
        }
    }

    increment(){
        console.log('button click!!')
        this.setState({count: ++this.state.count})
        
        console.log(this.state.count)
    }

    render() {
        var obj = this.state.todos.map((todo, key)=> {
            return  <ListItem  key={key} text={todo.text}></ListItem>
        })

        console.log(obj)
            

        return (
            <div>
                 <h2>Welcome {this.props.message} {this.state.count} </h2>
                 <button onClick={this.increment.bind(this)}>Increment</button>

                 <ul className="list-group">
                    {obj}
                </ul>
            </div>
                
        );
    }
}

export default Welcome;