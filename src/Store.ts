import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from './reducer/authSlice.ts';

const saveToLocalStorage = (state: any) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const persistedStore = loadFromLocalStorage();

const rootReducer = combineReducers({
    auth: authReducer
});

const store = configureStore({ reducer: rootReducer, preloadedState: persistedStore });

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;