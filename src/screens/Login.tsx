import React, { useState } from 'react';
import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = (prop: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    console.log("Username: " + username);
    console.log("Password: " + password);
    if (username === "Saman" && password === "saman123") {
      prop.navigation.navigate('Home');
    } else {
      console.log("Username or Password is incorrect!");
      setShowModal(true);
    }
  };

  return (
    <View style={style.container}>
      <Image style={style.image} source={require('../../assets/images/login-bg.jpg')} />
      <Text style={style.subtitle}>Welcome Back</Text>
      <Text style={style.title}>Login</Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
        <View style={{ marginTop: 150 }}>
          <View style={style.loginfiel}>
            <TextInput style={style.input} onChangeText={setUsername} value={username} placeholder="Username" />
            <TextInput style={style.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
          </View>
          <View style={style.loginbtns}>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={style.btn}>Login</Text>
            </TouchableOpacity>
            <Text style={{ margin: 10, fontSize: 15, color: '#000', alignSelf: 'center' }}>- Or -</Text>
            <TouchableOpacity onPress={() => { prop.navigation.navigate('Register'); }} >
              <Text style={style.btn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style={{ fontSize: 20 }}>Username or Password is incorrect!</Text>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={{ fontSize: 18, color: 'blue', marginTop: 20 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 5,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Login;
