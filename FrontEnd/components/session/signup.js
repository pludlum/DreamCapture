import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { isSignedIn } from '../../actions/session_actions';
import { FontAwesome } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet, Text, TextInput, View, TouchableOpacity, Button
} from 'react-native';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
      title: 'Sign Up',
  };

  constructor() {
    super();
    this.state = { email: "", password: "" };
  }

  resetNav() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };

  handleSignup() {
    this.props.signup(this.state)
    if (isSignedIn()) {
      this.resetNav();
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Create your account below.
        </Text>
        <View style={styles.inputsContainer}>
          <View style={styles.inputRow}>
            <Icon style={styles.icon}
              name='envelope-o' size={20} color='#D4CCD9' />
            <View style={styles.inputBorder}>
              <TextInput style={styles.input}
                value={this.state.email}
                autoCapitalize='none'
                placeholder='Email'
                placeholderTextColor='#D4CCD9'
                onChangeText={ email => this.setState({email})} />
            </View>
          </View>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.inputRow}>
            <Icon style={styles.icon}
              name='key' size={20} color='#D4CCD9' />
            <View style={styles.inputBorder}>
              <TextInput style={styles.input}
                value={this.state.password}
                autoCapitalize='none'
                placeholder='Password'
                placeholderTextColor='#D4CCD9'
                secureTextEntry={true}
                onChangeText={ password => this.setState({password})}/>
            </View>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <TouchableOpacity style={styles.submitButton}
            onPress={
              () => this.handleSignup()}>
              <Text style={styles.submitButtonText}> Sign Up </Text>
            </TouchableOpacity>
        </View>
        <Button style={styles.link}
          onPress={() => navigate('SignIn')}
          title='Log In'
          color='#D4CCD9'
          />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E3254',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D4CCD9',
    marginBottom: 20,
  },
  inputsContainer: {
    flexDirection: 'row',
  },
  inputRow: {
    flex: .80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    flex: .10,
    margin: 3,
  },
  inputBorder: {
    flex: 0.9,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#D4CCD9',
    marginVertical: 3,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#D4CCD9',
    borderColor: '#3E3254',
    backgroundColor: '#3E3254',
    borderWidth: 1,
    borderRadius: 1,
    marginVertical: 3,
  },
  submitContainer: {
    flexDirection: 'row'
  },
  submitButton: {
    flex: 0.8,
    marginTop: 30,
    backgroundColor: '#83BFAA',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 5,
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
