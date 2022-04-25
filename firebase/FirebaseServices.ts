// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxoa9K7ZfELo55PC-CorlftUICFMYWmqs",
  authDomain: "contactform-75b79.firebaseapp.com",
  projectId: "contactform-75b79",
  storageBucket: "contactform-75b79.appspot.com",
  messagingSenderId: "915270084733",
  appId: "1:915270084733:web:520dd2646f712710602914"
};

let app: FirebaseApp;

const AppInstance = () => {
  if (app) initializeApp(firebaseConfig);
  return app
}

const GetFirestoreInstance = () => {
  const appInstance = AppInstance();
  return getFirestore(appInstance);
}

const FirebaseServices = {
  AppInstance: AppInstance,
  FirestoreInstance: GetFirestoreInstance,
}

export default FirebaseServices;
