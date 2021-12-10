// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCoH6xlMDAHXj35-atXWkFZh8cO3WrcI0",
  authDomain: "twitter-clone-3ae93.firebaseapp.com",
  projectId: "twitter-clone-3ae93",
  storageBucket: "twitter-clone-3ae93.appspot.com",
  messagingSenderId: "355205066565",
  appId: "1:355205066565:web:b8c8e2ab4c5aa78d4f582c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

// 연습용이라 따로 env 파일에 변수를 저장하진않음
