import React from 'react'
import './states.css'

class States extends React.Component{

    // am es6 class syntax isusd to create a react state functionalo=ity
    // a constructor is initialized and a prop is passed to the constucrot and a 
    // indetifier 
    // states are also creates usng this.state and we place the date that might change over time
    
    constructor(props){
        super(props)
        this.state = {
            id : 1,
            name : "steven" ,
            date : new Date()
        };
    }
    // lifecycles using the mount and unmount methods
    componentDidMount(){
        this.tmerID = setInterval ( 
            () => this.tick() ,
            1000 
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState ({
            date : new Date()
        })
    }

    render(){
        return(
          <div className='state-holder  flex items-center justify-center'>
                <div className='timer-holder  text-center'>
                     <p>Hi there {this.state.name}</p>
                     <h1>{this.state.date.toLocaleTimeString()}</h1>
                </div>
             
          </div>


//  these next sections wills be used for list and keys
        )
    }
}



export default States 