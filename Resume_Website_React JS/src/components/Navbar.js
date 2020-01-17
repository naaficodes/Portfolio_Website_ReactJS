import React, { Component } from 'react';
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
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem>
            <Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    