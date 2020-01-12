import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','JS','PHP','REACT JS','FIREBASE']
        };
    }
    skillrender=()=>
    {
        let x=[]
        this.state.myskills.forEach(element => {
            x.push("<li>"+element+"</li>");
        });
        return x;
    };
    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {this.state.myskills.map((value,index)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    