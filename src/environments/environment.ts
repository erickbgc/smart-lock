// environment configuration that contains FirebaseConfig
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCOh-f2uo4uiPlgU87yS5j4gpgna5mgtVE",
    authDomain: "auth-tutorial-5a604.firebaseapp.com",
    databaseURL: "https://auth-tutorial-5a604.firebaseio.com",
    projectId: "auth-tutorial-5a604",
    storageBucket: "auth-tutorial-5a604.appspot.com",
    messagingSenderId: "283277017331",
    appId: "1:283277017331:web:034c8e581fdcc6c2bcb786"
  }
};

// Config to Convert DataSnapshot from Firebase to an Array
export const snapshotToArray = snapshot => {
  let returnArray = [];

  snapshot.forEach(element => {
    //al principio item no posee ningun valor, estos son pasados atraves de addItem(item)
    console.log("My elements: ", element);
    let item = element.val(); //obtiene el valor del nodo
    item = parseInt(item);
    console.log('Dentro de snapshot!! ',item);
    //item.key = element.key; //obtiene la llave del nodo
    //console.log('Dentro de snapshot, la clave!! ',item.key);
    console.log("Codigooo: ",item);
    returnArray.push(item);
    console.log('Returning array: ',returnArray);
  })

  return returnArray;
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
