import React, { Component } from 'react';
import LoginPage from './pages/LoginPage';
import Paper from 'material-ui/Paper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <LoginPage/>                    
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
