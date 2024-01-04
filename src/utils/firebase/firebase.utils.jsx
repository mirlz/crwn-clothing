import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1J3Xu8PZ4ZYCGrU06jFDkKTilcd_aILI",
  authDomain: "crwn-clothing-db-ce593.firebaseapp.com",
  projectId: "crwn-clothing-db-ce593",
  storageBucket: "crwn-clothing-db-ce593.appspot.com",
  messagingSenderId: "958837807460",
  appId: "1:958837807460:web:a34478cc009c670e6f8271"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userAuth);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  //if user data does not exists
  //create document with data
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userDocRef;
}