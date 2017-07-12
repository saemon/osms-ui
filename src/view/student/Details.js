import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
//import Paper from 'material-ui/Paper';
import Student from '../../model/Student';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Details  extends Component{
   render(){
     var s = new Student();

     return (
       <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <AppBar title={s.formattedName} />
          </MuiThemeProvider>
          <h1>abc</h1>
        </div>
     );
   }
}

export default Details;
