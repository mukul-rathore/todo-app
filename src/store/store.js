import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

import fbConfig from '../firebase';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, isLoaded } from 'react-redux-firebase'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

export const firestore = firebase.firestore();

export const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fbConfig)
  )
);

export const db = {
    users: firestore.collection("users"),
     getUserTimeStamp: firebase.firestore.FieldValue.serverTimestamp
}

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
}

export const rrfProps = {
  firebase,
  config: rrfConfig, fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
