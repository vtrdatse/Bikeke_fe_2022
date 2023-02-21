import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCWl6b47NrOizE5zZc4jx7kqlzMdC3ylug',
    authDomain: 'f-go-f97eb.firebaseapp.com',
    projectId: 'f-go-f97eb',
    storageBucket: 'f-go-f97eb.appspot.com',
    messagingSenderId: '265258487603',
    appId: '1:265258487603:web:f1f04478f04d1bf45af846',
    measurementId: 'G-H8BDQS8RCV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
    return signInWithPopup(auth, provider).catch((err) => {
        console.log(err);
    });
}
export function Logout() {
    return getAuth(app)
        .signOut()
        .then(window.location.reload(), localStorage.removeItem('currentUser'))
        .catch((err) => {
            console.log(err);
        });
}
