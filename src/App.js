import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
injectTapEventPlugin();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div className="App">
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap = {() => this.setState({open: !this.state.open})}
        />
        <Drawer
           docked={false}
           open={this.state.open}
           onRequestChange={(open) => this.setState({open})}
           >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <div>
          famelea mea
          </div>
        </BottomNavigation>
      </div>
    );
  }
}

export default App;
