# NoteX

This is the main repository for NoteX web note editor. NoteX is still in the development stage. Currently, I'm working on Markup Editor implementation to create more advanced notes.

# Live Preview
https://www.notex.in/

# Tech Stack
<img width="50" height="50" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" /> <img width="50" height="50" src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" /> <img width="50" height="50" src="https://cdn.worldvectorlogo.com/logos/redux.svg" /> <img width="50" height="50" src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" /><img width="50" height="50" src="https://cdn.worldvectorlogo.com/logos/yarn.svg" />

## 🚀 Test this project in less than 5 minutes

First, `git clone` this repository to your local directory.

Then run:

```bash
npm install
```

Or:

```bash
yarn
```

Then add your personal firebase config and name it `firebase.js`.

Example `firebase.js`:

```javascript
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const datebase = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, datebase };
```

You can use hard-coded data instead of using .env file.

To run this application use:

```bash
npm start
```

Or:

```bash
yarn start
```
