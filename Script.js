// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCvIr_VrxdA8J6e4HMAINHo-H1j1uvtjt0",
  authDomain: "pr-real-app.firebaseapp.com",
  projectId: "pr-real-app",
  storageBucket: "pr-real-app.appspot.com",
  messagingSenderId: "847771905553",
  appId: "1:847771905553:web:99ffeeac62d356142acbb0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Anonymous login
document.getElementById("login").onclick = () => {
  auth.signInAnonymously()
    .then(user => {
      alert("Login success: " + user.user.uid);
      // Save user in Firestore
      db.collection("users").doc(user.user.uid).set({
        online: true,
        joined: Date.now()
      });
    })
    .catch(err => alert(err.message));
};
