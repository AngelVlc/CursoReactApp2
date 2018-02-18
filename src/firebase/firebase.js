import * as firebase from 'firebase';

import config from './firebase.config';

firebase.initializeApp(config);

const database = firebase.database();

// ******* Añadir y actualizar 

// database.ref().set({
//     name: 'Nombre',
//     age: '30',
//     location: {
//         city: 'Val',
//         country: 'ES'
//     }
// }).then(() => {
//     console.log('data saved');
// }).catch((err) => {
//     console.log('This failed', e);
// });

// database.ref('age').set(35);
// database.ref('location/country').set('EU');


// database.ref('nuevo').set({a: 12, b: '1adsklsdakldsa¡'});


// *********** eliminar
// database.ref('nuevo').remove()
//     .then(() => {
//         console.log('removed');
//     });


// ************ update 
// database.ref().update({
//     name: 'NombreRRR'
//     // si le pusiera null lo borraría
//     // tb se puede añadir si pongo nuevos atributos
// }).then(() => {
//     console.log('updated');
// });


// database.ref().update({
//     name: 'NombreRRR',    
//     'location/city': 'Alic' // esto es para cambiar solo city y dejar country como estaba
// });

// ******* fetch

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch(err => {
//         console.log('Error fetching data', err);
//     });


// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch(err => {
//         console.log('Error fetching data', err);
//     });

//para detectar cambios
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log('on', snapshot.val());
// });

//para desactivar las subscripciones
//database.ref().off(onValueChange);


// *** arrays
// con push fb genera un id unico
//  database.ref('notes').push({
//     title: 'title 1',
//     body: 'saklsdlksad'
//  });
//  database.ref('notes').push({
//     title: 'title 2',
//     body: 'saklsdlksad'
//  });

// database.ref('/notes/-L5cih1deEVYHFibxmCF').update({
//     body: 'RRRRRR'
// });

// database.ref('/notes/-L5cih1deEVYHFibxmCF').remove();

// para otener los valores de un array
// database.ref('notes')
//     .once('value')
//     .then(snapshot => {
//         console.log(snapshot.val());

//         const coleccion = [];

//         snapshot.forEach(element => {
//             coleccion.push({
//                 title: element.key,
//                 ...element.val()
//             })
//         });

//         console.log(coleccion);
//     });

//eventos
// database.ref('notes').on('child_removed', (snapshot) => {
//     console.log('removed', snapshot.key, snapshot.val());
// });

// database.ref('notes').on('child_changed', (snapshot) => {
//     console.log('changed', snapshot.key, snapshot.val());
// });

// database.ref('notes').on('child_added', (snapshot) => {
//     console.log('added', snapshot.key, snapshot.val());
// });
