import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDIvh-QIiaWk0Qfu2pbFnJRVhqdvZ6cqtM',
  authDomain: 'helpinghands-10138.firebaseapp.com',
  databaseURL: 'https://helpinghands-10138.firebaseio.com',
  projectId: 'helpinghands-10138',
  storageBucket: 'helpinghands-10138.appspot.com',
  messagingSenderId: '861819466606',
  appId: '1:861819466606:web:85455c436024225a6f477f',
  measurementId: 'G-R4V5KG30VK'
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  /**Auth Api */

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
