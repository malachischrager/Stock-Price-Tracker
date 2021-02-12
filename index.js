const admin = require('firebase-admin');
var firebase = require('firebase');
const serviceAccount = require('./stock-key.json');

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

const db = admin.firestore();

async function run(){
  const docRef = db.collection('users').doc('alovelace');
  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
}

run();
