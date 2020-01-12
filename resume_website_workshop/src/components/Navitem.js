import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Navitem extends Component {
    render() {
        if(this.props.exact){
            console.log("true");
            return (
                <li id={this.props.item}>
                <Link exact to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>{this.props.item}</Link>
                </li>
                )
            }
            else
            {
                console.log("false");
                return (
                    <li id={this.props.item}>
                    <Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>{this.props.item}</Link>
                    </li>
                    )
                    
                }
                
            }
        }
        
        export default Navitem
        