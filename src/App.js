import React from 'react';
import './App.css';

export default class handsonform extends React.Component {

    state={
        name:"",
        department:"",
        rating:"",
        data:[]
    }

    change=(event)=>{
      this.setState({[event.target.name]:event.target.value})
    }

    display=()=>{
        const obj = {
            name : this.state.name,
            department : this.state.department,
            rating : this.state.rating
        }
        this.state.data.push(obj)
        this.setState({data:this.state.data,name:"",department:"",rating:""})
    }

  render() {
    return (
    <div className="App">
        <div>
          <h1>Employee Feedback Form</h1>
        </div>

        <div>
        <label for= "name">Name </label>
        <input type="text" id="name" name='name' onChange={this.change} placeholder="Enter Your Name" value={this.state.name}>
        </input>
        </div>
  
        <div>
        <label for= "dep">Department </label>
        <input type="text" name='department' placeholder='Enter Your Department Name' onChange={this.change} id="dep" value={this.state.department}>
        </input>
        </div>
  
        <div>
        <label for= "rate">Rating </label>
        <input type="number" name='rating' placeholder='Rating' onChange={this.change} id="rate" min="0" max="10" value={this.state.rating}>
        </input>
        </div>
  
        <div>
        <button onClick={this.display}>Submit</button>
        </div>

        <div className='data-container'>
        {this.state.data.map((item)=>{
          return(
            <h3>{`Name: ${item.name} | Department:${item.department} | Rating: ${item.rating}`}</h3>
          )
        })}
        </div>
  
    </div>
    )
  }
}



