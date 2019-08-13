import React, { Component } from 'react';

class NameFormControlled extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        title: 'React'
      }
      
    }

    componentWillMount() {
      setTimeout(()=> {
        this.setState({title: 'Angular'})
      }, 2000)
    }

    handleChange(event){
      console.log(event.target.value)
      this.setState({title: event.target.value})
    }
  
    handleSubmit(event) {
      console.log('A name was submitted: ' + this.input.current.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.title} onChange={this.handleChange.bind(this)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameFormControlled;