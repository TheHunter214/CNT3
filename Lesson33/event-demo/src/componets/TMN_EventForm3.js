import React, { Component } from 'react'
// Xu ly su kien voi props,state 
export default class TMN_EventForm3 extends Component {
  constructor(props){
    super(props);
    // Tao doi tuong du lieu thong qua state
    this.state = {
        name:"Tran Minh Nam",
        job:"Student"
    }
  }
  // Ham xu ly su kien 
  handleChangeName = (event)=>{
    this.setState({
        name:"K22CNT3 - ReactJs"
    })
  }
    render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay doi du lieu trong state</h2>
        <p>Du Lieu:{this.state.name} - {this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay doi name</button>
        <button onClick={this.handleChangeName}>THay doi job </button>
      </div>
    )
  }
}
