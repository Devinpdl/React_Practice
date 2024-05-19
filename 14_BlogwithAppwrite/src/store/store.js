import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    //Inside Store there comes only one parameter reducer;
    reducer:{
        auth: authSlice,
         //TODO: add more slices here for posts
    }
});

export default store;