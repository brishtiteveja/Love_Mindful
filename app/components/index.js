/**
 * Start tab components
**/

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';
import Home from './home';
import Messages from './messages';
import Profile from './profile';
import Cam from './cam';
import Scanner from './scanner';

import * as session from '../services/session';
import * as routeHistoryActions from '../services/routeHistory/actions';
import Splash from '../scenes/Splash';
import Main from '../scenes/Main';
//import Login from '../scenes/Main/scenes/Login';
//import Register from '../scenes/Main/scenes/Register';
//import Users from '../scenes/Main/scenes/Users';

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
	GLOBAL.originalXMLHttpRequest :
	GLOBAL.XMLHttpRequest;

const transition = Navigator.SceneConfigs.HorizontalSwipeJump;
transition.gestures = null;

export default class Index extends Component {
  constructor(props){
    super(props)

    this.state = {
        initialRoute: routeStack[0],
    };
  }

  componentDidMount() {
    // Waits for the redux store to be populated with the previously saved state,
	// then it will try to auto-login the user.
	const unsubscribe = store.subscribe(() => {
		if (store.getState().services.persist.isHydrated) {
			unsubscribe();
			this.autoLogin();
		}
	});
  }

  autoLogin() {
	session.refreshToken().then(() => {
		this.setState({ initialRoute: routeStack[3] });
	}).catch(() => {
		this.setState({ initialRoute: routeStack[0] });
	});
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <Home
            {...this.props} 
            userData ={route.userData}
            navigator={navigator} />
        );
    }
    if (routeId === 'messages') {
      return (
        <Messages
            {...this.props} 
            userData ={route.userData}
            navigator={navigator} />
        );
    }
    if (routeId === 'profile') {
      return (
        <Profile
            {...this.props} 
            userData ={route.userData}
            navigator={navigator} />
        );
    }
    if (routeId === 'cam') {
      return (
        <Cam
            {...this.props} 
            userData ={route.userData}
            navigator={navigator} />
        );
    }
    if (routeId === 'scanner') {
      return (
        <Scanner
            {...this.props} 
            userData ={route.userData}
            navigator={navigator} />
        );
    }
  }

  renderContent() {
    if (!this.state.initialRoute) {
        return <Splash />; 
    }   
/*
    return (
        <Navigator
            style={{flex: 1}}
            ref={'NAV'}
            initialRoute={{id: 'home', name: 'home'}}
            renderScene={this.renderScene.bind(this)}/>
    );
*/
    return (
        <Navigator
            initialRoute={this.state.initialRoute}
            initialRouteStack={routeStack}
            configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJump}
            onWillFocus={route => store.dispatch(routeHistoryActions.push(route))}
            renderScene={(route, navigator) =>
                <route.component route={route} navigator={navigator} {...route.passProps} />
            }   
        />  
    );  
  } 

  render() {
    return (
        <View style={{flex: 1}}>
            <Provider store={store}>
                {this.renderContent()}
            </Provider>
        </View>
    );
  }
}

const routeStack = [
	{ name: 'Main', component: Main },
	//{ name: 'Login', component: Login },
	//{ name: 'Register', component: Register },
	//{ name: 'Users', component: Users },
];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
	},
});

