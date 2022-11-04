import { AppState } from "./AppState";

export const AppInitiaState : AppState ={
    loading: {
        show:false
    },
    login:{
        show:null,
        error: null,
        isRecoveredPassword: false,
        isRecoveringPassword: false,
        isLoggedIn: false,
        isLoggingIn : false,
       
    }
}