import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';
import {grey200} from 'material-ui/styles/colors';
import GooglePlusIcon from 'material-ui-community-icons/icons/google-plus';


const container = {
  textAlign:"center",
  padding:15
}
const rightPanel = {
  display:"inline-block",
}
const loginPanel = {
  display:"inline-block",
  textAlign:"left",
  //height: 200,
  width: 400,
  position: "absolute",
  top: 50,
  //bottom:0,
  right:50,
  //left:"70%",
  margin:"auto",
  padding: 30,
  backgroundColor:grey200,
};

export default class LoginPage extends Component {
  render(){ return (
    <div style={container}>
      <div style={rightPanel}>
      </div>
      <Paper style={loginPanel} zDepth={1}>
          <h3>Sign in</h3>
          <TextField id="emailId"  floatingLabelText="Email" />
          <TextField id="password"  floatingLabelText="Password" />
          <br/>
          <br/>
          <br/>
          <br/>
          <RaisedButton label="Sign In" primary={true} /> &nbsp;&nbsp;
          <RaisedButton label="Register" /><br/><br/>
          <FlatButton
            label="Sign in with Google"
            labelPosition="after"
            fullWidth={true}
            icon={<GooglePlusIcon />}
          />
      </Paper>
    </div>
    );
  }
}
