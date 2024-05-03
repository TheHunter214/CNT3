import React, { Component } from 'react'

export default class  extends Component {
  constructor(props){
    super(props);
    this.state = {
      studentName:"Tran Minh Nam"
    }
  }
  // ham xu ly su kien 
  handleChange = (ev)=>{
    // lay gia khi thay doi tren form 
    let ten = ev.targer.name;
    let gtri = ev.targer.value;
    // Cap nhat state
    this.setState({
      [ten]:gtri
      //studentName:ev.targer.value
    })
  }

  handleChange = (ev)=>{
    ev.prevenDefault();
    // lay gia tri moi trong state
    alert(this.state.studentName)

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <div> 
            <label> Ho va Ten </label>
            <input name='studentName' value={this.state.studentName}
               onChange={this.handleChange}/>     
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
