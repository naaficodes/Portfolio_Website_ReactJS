import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'available':false,
            'active':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.available){
            document.getElementById(this.state.active).classList.remove('active');
        }
        this.setState({'available':true,'active':x},()=>{
            document.getElementById(this.state.active).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="Home" tolink="/" exact={true} activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="/about" exact={false} activec={this.activeitem}></Navitem>
            <Navitem item="Education" tolink="/education" exact={false} activec={this.activeitem}></Navitem>
            <Navitem item="Skills" tolink="/skills" exact={false} activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="/contact" exact={false} activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    