
import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default};







 /* database.ref("expenses").push({
        description: "renda" ,
        note: "mensal",
        amount: 350,
        createdAt: 11/10/2019
  });
  
  database.ref("expenses").push({
    description: "gpl" ,
    note: "semanal",
    amount: 30,
    createdAt: 12/10/2019
});

database.ref("expenses").push({
    description: "supermercado" ,
    note: "mensal",
    amount: 110,
    createdAt: 11/10/2019
});


database.ref("expenses")
    .once("value")
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach(( childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    });
    


  const onValueChange = database.ref().on("value", (snapshot) => {
      console.log(snapshot.val());
  }, (e) => {
      console.log("Error with data fetching",e);
  });


  // child_changed
    database.ref("expenses").on("child_changed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

    // child_removed
    database.ref("expenses").on("child_removed", (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

    // child_added
    database.ref("expenses").on("child_added", (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });


    database.ref("expenses").push({
    description: "cabelo" ,
    note: "semestral",
    amount: 11,
    createdAt: 11/10/2019
});

  setTimeout(() => {
      database.ref("name").set("Carlos Amorim");
  }, 3500);



  setTimeout (() => {
      database.ref().off(onValueChange);
  }, 7000);



    database.ref("age").remove()
    .then(() => {
    console.log("Data is saved");
    }).catch((e) => {
    console.log("This failed.",e);
    });



database.ref().update ({
    "attributes/height": 179,
    name: "Carlos"
});





  database.ref().set({
      name: "Carlos Amorim",
      age: 42,
      location: {
          city: "Barcelos",
          country: "Portugal"
      }
  }).then(() => {
      console.log("Data is saved");
  }).catch((e) => {
      console.log("This failed.", e);
  });

  database.ref("age").set(27);
  database.ref("location/city").set("Esposende");
  
  database.ref("attributes").set({
        height: 177,
        weight: 69
  }).then(() => {
      console.log("Data is saved");
  }).catch((e) => {
      console.log("This failed.",e);
  });
  
  */