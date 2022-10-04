import React from "react";
import FormInput from "../form-input/form-input";

import './sign-in.scss';

class SIgnIn extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handelSubmit=event=>{
        event.preventDefault();

        this.setstate({email:'', password:''})
    }

    handelChange=event=>{
        const{ value,name }=event.target;

        this.setstate({[name]: value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>Alrady have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput name="email" type='email' value={this.state.email} handelChange={this.handelChange} label={'email'} required/>
                    <FormInput name="password" type='password' value={this.state.password} handelChange={this.handelChange} label={'password'} required/>
                    <input type='submit' value='Submit Form'/>
                </form>

            </div>
        )
    }
}

export default SIgnIn;