/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, Text, View, TextInput, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = (prop: any) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConpassword] = useState('');

  const handleLogin = () => {
    console.log("Username: "+username);
    console.log("Password: "+password);
    console.log("Confirm Password: "+conpassword);
  };

  return (
    <View style={style.container}>
        <Image style={style.image} source={require('../../assets/images/login-bg.jpg')}/>
        <Text style={style.subtitle}>Welcome to EasyBuy</Text>
        <Text style={style.title}>Register</Text>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
          <View style={{marginTop:110}}>
            <View style={style.loginfiel}>
              <TextInput style={style.input} onChangeText={setUsername} value={username} placeholder="Username" />
              <TextInput style={style.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry/>
              <TextInput style={style.input} onChangeText={setConpassword} value={conpassword} placeholder="Confirm Password" secureTextEntry/>
            </View>
            <View style={style.loginbtns}>
              <TouchableOpacity>
              <Text style={style.btn}>Register</Text>
              </TouchableOpacity>
              <Text style={{margin: 10, fontSize:15, color: '#000', alignSelf: 'center'}}>Already have an account?</Text>
              <TouchableOpacity onPress={() => {prop.navigation.navigate('Login');}}>
              <Text style={style.btn} >Login</Text>
              </TouchableOpacity>
            </View>
        </View>
        </KeyboardAwareScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  title: {
    fontSize: 60,
    color: 'black',
    fontWeight: '600',
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 100,
  },
  loginfiel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbtns: {
    marginTop: 50,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',

  },
  btn: {
    margin:5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'darkblue',
    borderRadius: 20,
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    height: 40,
    width: '90%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#123',
  },
});

export default Register;
