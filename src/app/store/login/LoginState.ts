export interface LoginState{
    show(show: any): unknown;
    error: any;
    isRecoveredPassword: boolean;
    isRecoveringPassword: boolean;
    isLoggedIn: boolean;
    isLoggingIn : boolean;
}