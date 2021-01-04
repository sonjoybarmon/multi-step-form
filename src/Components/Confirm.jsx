import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { IconButton, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const {
            values: { firstName, lastName, email, occupation, city, bio }
          } = this.props;
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
                    <div style={{textAlign: 'center'}}>
                        <List>
                        <ListItem style={{textAlign: 'center'}}>
                            <ListItemText primary="First Name" secondary={firstName} />
                        </ListItem>
                        <ListItem style={{textAlign: 'center'}}>
                            <ListItemText primary="Last Name" secondary={lastName} />
                        </ListItem >
                        <ListItem style={{textAlign: 'center'}}>
                            <ListItemText primary="Email" secondary={email} />
                        </ListItem>
                        <ListItem style={{textAlign: 'center'}}>
                            <ListItemText primary="Occupation" secondary={occupation} />
                        </ListItem>
                        <ListItem style={{textAlign: 'center'}}>
                            <ListItemText primary="City" secondary={city} />
                        </ListItem>
                        <ListItem style={{textAlign: 'center'}}>
                            <ListItemText primary="Bio" secondary={bio} />
                        </ListItem>
                        </List>
                    <br />
                    
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.back}
                    >Back</Button>
                    
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.continue}
                      style={{marginLeft : '20px'}}
                    >Confirm & Continue</Button>
                    </div>
                </>
            </MuiThemeProvider>
        );
    }
}

export default Confirm;