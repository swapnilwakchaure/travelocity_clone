// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfLjr90a03JSCvJ3bhsBDwWDS7qo4ZJAs",
  authDomain: "travelgo-authentication.firebaseapp.com",
  projectId: "travelgo-authentication",
  storageBucket: "travelgo-authentication.appspot.com",
  messagingSenderId: "936341387704",
  appId: "1:936341387704:web:27ecd8eb62639f04e6f74d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export default app