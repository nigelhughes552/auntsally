import firebase from 'firebase/app';
import 'firebase/firestore';
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBSIMJZEZSnpIlSzEpfAGKHpkv2AufslyI',
    authDomain: 'auntsally-a3c6c.firebaseapp.com',
    databaseURL: 'https://auntsally-a3c6c.firebaseio.com',
    projectId: 'auntsally-a3c6c',
    storageBucket: 'auntsally-a3c6c.appspot.com',
    messagingSenderId: '1061799959336',
    appId: '1:1061799959336:web:ad60705faae2d655',
  };
  firebase.initializeApp(config);
  // firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore();
export { fireDb };
