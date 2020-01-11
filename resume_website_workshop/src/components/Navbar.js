import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import Navitem from './Navitem';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/" exact={true}></Navitem>
                    <Navitem item="About" tolink="/about" exact={false}></Navitem>
                    <Navitem item="Education" tolink="/education" exact={false}></Navitem>
                    <Navitem item="Skills" tolink="/skills" exact={false}></Navitem>
                    <Navitem item="Contact" tolink="/contact" exact={false}></Navitem>

                    {/* <li>
                    <Link to='/about'>About</Link>
                    </li>
                    <li>
                        Education
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Contact
                    </li> */}
                </ul>
            </nav>
        )
    }
}

export default Navbar
