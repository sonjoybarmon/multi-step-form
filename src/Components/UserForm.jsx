import React , {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPresonalDetails from './FormPresonalDetails';
import Success from './Success';
import Confirm from './Confirm';

export class UserForm extends Component{
    state = {
        step : 1 ,
        firstName : '',
        lestName : '',
        email : '',
        password : '',
        country : '',
        city : '',
        bio : '',
        error : '',
        showError : 'error'
    }
    // proceed to next step
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step : step + 1
        })
    }
    // go back to previous step
    prevStep = () => {
        const {step} = this.state
        this.setState({
            step : step - 1
        })
    }
    // handle field change
    handleChange = input => e => {
        this.setState({[input] : e.target.value})
    }
  render() {
      const {step} = this.state;
      const { firstName, lestName, email, password , country ,city , bio , error , showError} = this.state;
      const values = { firstName, lestName, email, password , country , city , bio , error , showError}

    switch(step) {
        case 1: 
            return (
                <FormUserDetails 
                    nextStep={ this.nextStep}
                    prevStep={ this.prevStep}
                    values ={values}
                    handleChange = {this.handleChange}
                />
            )
        case 2: 
            return (
                <FormPresonalDetails
                    nextStep={ this.nextStep}
                    prevStep={ this.prevStep}
                    values ={values}
                    handleChange = {this.handleChange}
                />
            )

        case 3: 
            return (
                <Confirm
                    nextStep={ this.nextStep}
                    prevStep={ this.prevStep}
                    values ={values}
                />
            )

        case 4: 
        return (
            <Success 
                nextStep={ this.nextStep}
                prevStep={ this.prevStep}
                values ={values}
            />
        )

        default: 
        (
            console.log('three step form in react js')
        )
    }

    
  };
};

export default UserForm;