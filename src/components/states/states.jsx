import React from 'react'

class States extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            id : 1,
            name : "steven"
        };
    }

    render(){
        return(
            <p>Hi there {this.state.name}</p>
        )
    }
}

export default States 