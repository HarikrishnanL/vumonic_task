import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

// const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCR0vlwTB9yecgtf-nN5pQiq31y4LqqPsw",
    authDomain: "postuser-be844.firebaseapp.com",
    databaseURL: "https://postuser-be844.firebaseio.com",
    projectId: "postuser-be844",
    storageBucket: "postuser-be844.appspot.com",
    messagingSenderId: "467900470255",
    appId: "1:467900470255:web:45c4a4041642549625dc1a",
    measurementId: "G-BRFZK0MG42"
};
const Firebase = firebase.initializeApp(config);

// firebase.firestore()

export default Firebase;