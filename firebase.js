import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyCcqLbdZSF1yv5B05hNYSb3Yr4A6qSn7U8",
        authDomain: "needforcode-2e873.firebaseapp.com",
        databaseURL: "https://needforcode-2e873-default-rtdb.firebaseio.com",
        projectId: "needforcode-2e873",
        storageBucket: "needforcode-2e873.appspot.com",
        messagingSenderId: "255055974443",
        appId: "1:255055974443:web:86ed4ce25e02db3ef2da6e",
        measurementId: "G-SVB6TF8DRH"
      };
    
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  

      var infoRef = firebase.database().ref("info");

  document.getElementById("form").addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var Name = getInputVal('name');
    var mobile = getInputVal('mobile');
    var email = getInputVal('email');
    var date = getInputVal('date');
    var slot = getInputVal('slot');

    saveInfo(Name, mobile, email, date, slot);

    document.getElementById('form').reset();
  }

  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  function saveInfo(Name, mobile, email, date, slot) {
    var newInfoRef = infoRef.push();
    newInfoRef.set({
        Name: Name,
        mobile: mobile,
        email: email,
        date : date,
        slot : slot
    });
  }