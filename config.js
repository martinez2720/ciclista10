import firebase from "firebase/app";
require("@firebase/firestore");
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCZrG0BF6LrnRpWZjsPQxNGyMCLByo8HrM",
  authDomain: "e-ride-549e4.firebaseapp.com",
  projectId: "e-ride-549e4",
  storageBucket: "e-ride-549e4.appspot.com",
  messagingSenderId: "588298110700",
  appId: "1:588298110700:web:34e3df331c6b1fc95047c9",
  measurementId: "G-G3K7BWL5LH"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

handleLogin = async () => {
  const { email, password } = this.state;

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    this.props.navigation.navigate('Ride');
  } catch (error) {
    console.error('Erro de autenticação:', error);
  }
};
