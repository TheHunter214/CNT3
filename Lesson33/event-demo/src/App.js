import React, { Component } from 'react'
import TMN_EventForm1 from './componets/TMN_EventForm1'
import TMN_EventForm2 from './componets/TMN_EventForm2'
import TMN_EventForm3 from './componets/TMN_EventForm3'
import TMN_EventForm4 from './componets/TMN_EventForm4'

export default class 
 extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo</h1>
        <TMN_EventForm1/>
        <TMN_EventForm2/>
        <TMN_EventForm3/>
        <TMN_EventForm4 name="Tran Minh Nam"/>
      </div>
    );
  }
}
