
import React, {Component } from 'react';
import  Fingerprint2 from 'fingerprintjs2';


class fingerprint extends Component  {
state = {
    device : ''
}
componentDidMount(){
    Fingerprint2.get((components)=> {
        let values = components.map(function (component) { return component.value })
        this.setState({
        device : Fingerprint2.x64hash128(values.join(''), 31)
        })
    })
}
    render(){
    return (
        <div>
            {this.state.device}
        </div>
    );
    }
}

export default fingerprint;
