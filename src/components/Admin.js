import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Admin extends Component {

  constructor(){

    super()
  }

    render() {
        return (
           <div>
               this is admin page
               <Link to="/Logout">Logout</Link>
           </div>
        )
    }
}
