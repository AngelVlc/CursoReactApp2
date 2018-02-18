import * as firebase from 'firebase';

import config from './firebase.config';

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Nombre'
});