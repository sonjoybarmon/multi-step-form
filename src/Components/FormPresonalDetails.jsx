import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { IconButton, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

class FormUPresonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep()
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
                            placeholder="Enter Your Country"
                            label="country"
                            onChange={handleChange('country')}
                            defaultValue={values.country}
                            style={{width: '50%'}}
                        />
                        <br />
                        <br />
                        <TextField 
                            placeholder="Enter Your City"
                            label="city"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                            style={{width: '50%'}}
                        />

                        <br />
                        <br />
                        <TextField 
                            placeholder="Enter Your Bio"
                            label="Bio"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                            style={{width: '50%'}}
                        />

                        <br />
                        <br />

                        <Button variant='contained' color='primary' onClick={this.back} style ={{marginLeft: '20px'}}>
                            previous
                        </Button>
                        <Button variant='contained' color='primary' onClick={this.continue} style={{marginLeft: '20px'}}>
                            Continue
                        </Button>


                    </div>
                    



                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default FormUPresonalDetails;