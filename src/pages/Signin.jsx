import FormRegisterUser from "../components/FormRegisterUser";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { auth, gProvider } from '../Firebase'

// const gProvider = new GoogleAuthProvider()
// gProvider.addScope('https://www.googleapis.com/auth/cloud-platform');

// const auth = getAuth();
// signInWithPopup(auth, gProvider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

const Signin = () => {
    // const gProvider = new GoogleAuthProvider()
    // gProvider.addScope('https://www.googleapis.com/auth/cloud-platform');
    // const auth = getAuth()

    const registerUser = ( input ) => {
        const saveToFirebase = getFirestore()
        saveToFirebase.collection('profile')
    }

    const signInGoogle = () => {
        auth.signInWithRedirect(gProvider).catch((error) => {
            //     // Handle Errors here.
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     // The email of the user's account used.
            //     const email = error.email;
            //     // The AuthCredential type that was used.
            //     const credential = GoogleAuthProvider.credentialFromError(error);
            //     // ...
        })
    }

    return (
        <FormRegisterUser />
    );
}

export default Signin;