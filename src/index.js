import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MuiThemeProvider muiThee={getMuiTheme(darkBaseTheme)}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
