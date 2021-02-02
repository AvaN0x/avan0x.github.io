import firebase from "firebase/app";
import { combineReducers, createStore } from "redux";
import { DefaultRootState } from "react-redux";
import { firebaseReducer, FirebaseReducer } from "react-redux-firebase";
import firebaseConfig from "./config";


import IAbout from '../features/Portfolio/About/IAbout';
import IProjects from '../features/Portfolio/Projects/IProjects';
import IIcon from "../components/LanguagesIcons/IIcon";

firebase.initializeApp(firebaseConfig)

interface ReducerRootState {
    firebase: FirebaseReducer.Reducer
}
const rootReducer = combineReducers<ReducerRootState>({
    firebase: firebaseReducer
})

const initialState = {}
export const store = createStore(rootReducer, initialState)

export const rrfProps = {
    firebase,
    config: {
        userProfile: 'users'
    },
    dispatch: store.dispatch
}

export type RootState = DefaultRootState & {
    firebase: {
        data: {
            about?: IAbout;
            email?: string;
            projects?: IProjects;
            icons?: { [id: string]: IIcon; };
        }
    }
}
