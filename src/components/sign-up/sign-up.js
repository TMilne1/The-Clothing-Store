import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit =  async event => {
        console.log('--------')
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }else{
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email,password);
                await createUserProfileDocument(user, {displayName})
                this.setState(
                    {
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }
                )

            }catch(error){
                console.error(error)
            }
        }
        

    }
    
    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({ [name]: value })
    }

    render() {

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign in with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='name'
                        label='display name'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />


                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        name='confirmPassword'
                        type='password'
                        label='confirm password'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        required
                    />

                    <div className='buttons'>
                        <CustomButton onClick={this.handleSubmit}>Register</CustomButton>
                    </div>
                </form>

            </div>
        )
    }

}


export default SignUp;