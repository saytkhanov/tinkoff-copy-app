import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyCZhlIIrvITaGk2KcXr5L2P0PGt4eFiyq8",
	authDomain: "tinkoff-react-native.firebaseapp.com",
	projectId: "tinkoff-react-native",
	storageBucket: "tinkoff-react-native.appspot.com",
	messagingSenderId: "419031691669",
	appId: "1:419031691669:web:33e53325fc4135b2e0c69c",
	measurementId: "G-KPHQZM33MZ"
};

initializeApp(firebaseConfig)

export const auth = getAuth()

export const register = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()
