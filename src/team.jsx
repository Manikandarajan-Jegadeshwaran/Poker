import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Team extends Component{

    
    render(){
        return(
            <li className='list-group-item'>
                {
                    this.props.estimated &&
                    this.props.user === this.props.name &&
                    <span> &#x2714; &nbsp; &nbsp;</span>
                }
                {this.props.name}
                {
                   (!this.props.estimated || this.props.user !== this.props.name) &&
                    <img style={{float:'right'}} src='/loading.gif' alt='estimating..'/>
                }
                {
                    this.props.estimated && 
                    this.props.user === this.props.name && 
                    <span style={{float:'right',fontSize:'inherit'}} className='badge badge-pill badge-success'>{this.props.number}</span>
                }
            </li>
        )
    }
}

export default Team;