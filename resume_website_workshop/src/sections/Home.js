import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

  

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                  <ReactTypingEffect className="typingeffect" text={['I am Abdul Wahid Naafi','I am a web developer']} speed={100} eraseDelay={700}/>
            </div>
        )
    }
}

export default Home
