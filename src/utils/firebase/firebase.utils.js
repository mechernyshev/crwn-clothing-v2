import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyA207jB6oMa4Xta8r-goc_vt13Il5rMmfY",
    authDomain: "crwn-clothing-db-82a7f.firebaseapp.com",
    projectId: "crwn-clothing-db-82a7f",
    storageBucket: "crwn-clothing-db-82a7f.appspot.com",
    messagingSenderId: "784276164682",
    appId: "1:784276164682:web:00d5b975d5d46a056ad6b3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
