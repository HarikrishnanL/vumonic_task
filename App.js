import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as firebase from 'firebase';

import LoginAction from './src/actions/LoginAction';
import SignUpAction from './src/actions/SignUpAction';
import PostAction from './src/actions/PostAction';

const AppNavigator = createStackNavigator({
  Login: { screen: LoginAction },
  SignUp: { screen: SignUpAction },
  Post: { screen: PostAction }
},
{
  initialRouteName:'Login'
})

const AppContainer = createAppContainer(AppNavigator);
const store = configureStore();

export default class App extends Component {
  constructor(){
    super();
    this.state ={

    }
  }
  render(){
    return (
      <Provider store = {store}>
        <AppContainer />
      </Provider>
    )
  }
}