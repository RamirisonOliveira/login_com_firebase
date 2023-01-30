import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBpxmk6X5MwZyH-XKd3ikmnS_yF7xpm2JM',
  authDomain: 'cadp-auth.firebaseapp.com',
  projectId: 'cadp-auth',
  storageBucket: 'cadp-auth.appspot.com',
  messagingSenderId: '651038084128',
  appId: '1:651038084128:web:c40e2dc9d3c3a888edc045'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);