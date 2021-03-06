import React, { Component } from 'react';
import { isSignedIn, onSignOut } from '../../actions/session_actions';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
      title: 'Main',
  };

  handleLogout() {
    const { navigate } = this.props.navigation;
    this.props.logout();
    onSignOut().then(() => navigate('SignIn'));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to DreamCapture
        </Text>
        <Button
          onPress={() => navigate('Home')}
          title="Home"
        />
        <Button
          onPress={() => navigate('Record')}
          title="Record a dream"
        />
        <Button
          onPress={() => this.handleLogout()}
          title="Log Out"
        />
        <Button
          onPress={() => navigate('Login')}
          title="Log In"
        />
        <Button
          onPress={() => navigate('Signup')}
          title="Sign Up"
        />
        <Button
          onPress={() => navigate('Alarm')}
          title="Alarm Show Page"
        />
        <Button
          onPress={() => navigate('DreamShow', {dreamId: 77})}
          title="Dream Show Page"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
