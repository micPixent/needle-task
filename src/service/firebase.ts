// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCYkNbX2BKNPtp_yVS4NJRB-ks_I5ajhlM",
	authDomain: "project-a-befb1.firebaseapp.com",
	projectId: "project-a-befb1",
	storageBucket: "project-a-befb1.appspot.com",
	messagingSenderId: "385853469967",
	appId: "1:385853469967:web:b1cb282b0a3460326f3a7a",
	measurementId: "G-FX7DHZQH78",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
