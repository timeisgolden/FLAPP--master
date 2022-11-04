import { actionSheetController } from "@ionic/core";
import { createReducer, on } from "@ngrx/store";
import { AppInitiaState } from "../AppInitialState";

import { login, loginFail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./LoginActions";
import { LoginState } from "./LoginState";

export function loginReducer(state: LoginState, action){
    return reducer(state, action);
}

const initialState : LoginState = AppInitiaState.login;



const reducer = createReducer(initialState,
    on(recoverPassword, currentState=>{
        return {
            ...currentState,
            error: null,
            isRecoveredPassword:false,
            isRecoveringPassword:true
        }

    }),
    on(recoverPasswordSuccess, currentState=>{
        return{
            ...currentState,
            error: null,
            isRecoveredPassword:true,
            isRecoveringPassword:false
        }
    }),
    on(recoverPasswordFail, (currentState,action)=>{
        return {
            ...currentState,
            error: action.error,
            isRecoveredPassword:false,
            isRecoveringPassword:false
        }
    }),
    on(login, currentState=>{
        return {
            ...currentState,
            error: null,
            isLoggedIn:false,
            isLoggingIn:true
        }
    }),
    on(loginSuccess, currentState=>{
        return {
            ...currentState,
            error: null,
            isLoggedIn:true,
            isLoggingIn:false
        }
    }),
    on(loginFail, (currentState,action)=>{
        return {
            ...currentState,
            error: action.error,
            isLoggedIn:false,
            isLoggingIn:false
        }
    })
    )
