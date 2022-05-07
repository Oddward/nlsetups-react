// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, Auth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUz0GfJ_Vbud7SIoTlrj94oA49o7b3eg8",
  authDomain: "nlsetups.firebaseapp.com",
  projectId: "nlsetups",
  storageBucket: "nlsetups.appspot.com",
  messagingSenderId: "232413620404",
  appId: "1:232413620404:web:761dd8b45bf9bb0745cfe1",
  measurementId: "G-TF2Y2STL4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const gProvider = new GoogleAuthProvider()
gProvider.addScope('https://www.googleapis.com/auth/cloud-platform');
const auth = getAuth()

// 
// export const addUser
// export const getUser
// export const getUserProfile
// export const getUsers
// export const authUser
// export const addPost
// export const getPost
// export const getPostsList
// export const addComment
// export const getComment
// export const getCommentsList

export { auth, gProvider }