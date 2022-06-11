import React , {Component} from 'react'
import './style.css'

class Form extends Component {
    constructor(props){
        super(props)

        this.state ={
            value : ' ' ,
            label : ' Example '
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState(
            {
                value:event.target.value ,
                label:event.target.value
            }
        )
    }

    handleSubmit(event){
        alert('A name was submitted:' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <div className='container p-5 flex items-center justify-center'>
                <h1 className='fw-bold form-title'>this is a form</h1>
                <hr />
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        Name : {this.state.label}
                        <input type="text" name="" id="" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }

}

export default Form