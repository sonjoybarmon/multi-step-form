import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { IconButton, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    render() {
        const {values , handleChange} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                            </IconButton>
                            <Typography variant="h4" style={{margin : 'auto'}}>
                                Enter Your Details
                            </Typography>
                        </Toolbar> 
                    </AppBar>

                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{textAlign: 'center'}}>
                        <TextField 
                            // hintText="Enter Your First Name"
                            // floatingLabel="First Name"
                            // onChange={handleChange('firstName')}
                            // defaultValue = {values.firstName}
                            placeholder="Enter Your First Name"
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            style={{width: '50%'}}
                        />
                        <br />
                        <br />
                        <TextField 
                            // hintText="Enter Your First Name"
                            // floatingLabel="First Name"
                            // onChange={handleChange('firstName')}
                            // defaultValue = {values.firstName}
                            placeholder="Enter Your Last Name"
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            style={{width: '50%'}}
                        />
                        <br />
                        <br />
                        <TextField 
                            // hintText="Enter Your First Name"
                            // floatingLabel="First Name"
                            // onChange={handleChange('firstName')}
                            // defaultValue = {values.firstName}
                            placeholder="Enter Your Email"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            style={{width: '50%'}}
                        />
                        <br />
                        <br />
                        <TextField 
                            // hintText="Enter Your First Name"
                            // floatingLabel="First Name"
                            // onChange={handleChange('firstName')}
                            // defaultValue = {values.firstName}
                            placeholder="Enter Your password"
                            label="Password"
                            onChange={handleChange('password')}
                            defaultValue={values.password}
                            style={{width: '50%'}}
                        />

                        <br />
                        <br />

                        <Button variant='contained' color='primary' onClick={this.continue}>
                            Continue
                        </Button>

                    </div>
                    



                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;