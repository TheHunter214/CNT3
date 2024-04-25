import React, { Component } from 'react'

export default class TMN_EventForm1 extends Component {
   // Ham xu ly su kien 
   eventHandle1 = ()=>{
    alert("event handle 1");
 }
   eventHandleClick2(){
    alert("Event Click 2")
   }
    render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event handle</h2>
        {/* goi ham xu ly su kien khi render */}
        <button onClick={this.eventHandleClick1}>Click 1 </button>
        {/* goi ham xu ly khi click */}
        <button onClick={this.eventHandleClick2()}>Click 2 </button>

      </div>
    )
  }
}
