import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="commitee member" where="Ecell vit" from="March 2018" to="Present"/>
                <Widecard title="Facilitator" where="Developer circle from facebook" from="December 2019" to="Present"/>
            </div>
        )
    }
}

export default Education
