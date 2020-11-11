// environment configuration that contains FirebaseConfig
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyC1LNzxUOAc88b-JwOzEOE_7xBUXuwtUyc",
    authDomain: "ionic-iot-398f4.firebaseapp.com",
    databaseURL: "https://ionic-iot-398f4.firebaseio.com",
    projectId: "ionic-iot-398f4",
    storageBucket: "ionic-iot-398f4.appspot.com",
    messagingSenderId: "365512923736",
    appId: "1:365512923736:web:99f320bf669e380a2f082d"
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
