import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { IconButton, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
      };
    
    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };

    render() {
        return (
            <MuiThemeProvider>
                <>
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

                        <div style={{width: '100%', height: '90vh' , display: 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column' }} >
                            <h1>Thank You For Your Submission</h1>
                            <p>You will get an email with further instructions.</p>
                        </div>
                </>
            </MuiThemeProvider>
        );
    }
}

export default Success;