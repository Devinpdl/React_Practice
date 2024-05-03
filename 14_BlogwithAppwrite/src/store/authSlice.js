import { createSlice, CreateSlice } from "@reduxjs/toolkit";

//authSlice do requires InitialState and we do Slice just coz to track the Authentication?
//Means; to check whetether user is authenticated or not.. by asking with the store.js always.
const initialState = {
    //we give our data that we have accordingly on your own..
    status: false,
    userData : null, //We're assuming by default status is false and userData is null..
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        //Reducers is nothing but objects..
        //We have to export individual function of reducers..
        //.. so that diff components using this function will get know their state or does dispatch from
        //their methods..
        login : (state, action) => {
            //If someone used this login part or has dispatched then do;
            state.status= true; //update the state to true which was previously false by default..
            state.userData = action.payload.userData; // userData comes from payload in React okay?
        },
        //Another method can also be dispatched by some functionality that may be;
        logout : (state) => {
        //logout does already have access of payload i.e of action so no need to write action using comma , ..
        state.status = false;
        state.userData = null;
        }
    }

})

export const {} = authSlice.actions;

export default authSlice.reducer;