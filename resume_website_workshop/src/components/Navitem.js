import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class Navitem extends Component {
    render() {
        if(this.props.exact){
            return (
                <li>
                    <Link exact to={this.props.tolink}>{this.props.item}</Link>
                </li>
            )
        }
        else
        {
            return (
                <li>
                    <Link to={this.props.tolink}>{this.props.item}</Link>
                </li>
            )

        }
        
    }
}

export default Navitem
