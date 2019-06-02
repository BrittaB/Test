

const firebaseConfig = {
    apiKey: "AIzaSyAZ96yCNGQ-kTUZSpQXo3FlkqfvaHBseIk",
    authDomain: "kuproject2-b59bd.firebaseapp.com",
    databaseURL: "https://kuproject2-b59bd.firebaseio.com",
    projectId: "kuproject2-b59bd",
    storageBucket: "kuproject2-b59bd.appspot.com",
    messagingSenderId: "1013064070830",
    appId: "1:1013064070830:web:499c11fabe7f0d4f"
  };

  document.addEventListener("DOMContentLoaded", event => {

    const app =firebase.app();

  });

  function gitHubLogin() {
    cosnt provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(provider)

      .then(result => {
          const user = sesult.user;
          
      })
  }