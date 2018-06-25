import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD43E15bvqRY3vffoZjubvRCQXakHJajXc",
  authDomain: "bg-app-49e4e.firebaseapp.com",
  databaseURL: "https://bg-app-49e4e.firebaseio.com",
  messagingSenderId: "412434555017",
  projectId: "bg-app-49e4e",
  storageBucket: "bg-app-49e4e.appspot.com",
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
