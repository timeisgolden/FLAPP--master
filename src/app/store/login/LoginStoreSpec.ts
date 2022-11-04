import { User } from "src/app/model/user/user"
import { AppInitiaState } from "../AppInitialState"
import { login, loginFail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./LoginActions"
import { loginReducer } from "./LoginReducers"
import { LoginState } from "./LoginState"

describe("login store",()=>{
    it('recover password',()=>{
    const initialState: LoginState =  AppInitiaState.login;
    const newState= loginReducer(initialState,recoverPassword({email: 'any@email.com'}));
    expect(newState).toEqual({
        ...initialState,
        error: null,
        isRecoveredPassword: false,
        isRecoveringPassword: true
    })
    })
    it('recover passwordSuccess',()=>{
        const initialState: LoginState =   AppInitiaState.login;
        const newState= loginReducer(initialState,recoverPasswordSuccess());
        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        })
        })
    it('recover passwordFail',()=>{
            const initialState: LoginState =   AppInitiaState.login;
            const error= {error : 'error'};
            
            const newState= loginReducer(initialState,recoverPasswordFail({
                error,
                any: undefined
            }));
            expect(newState).toEqual({
                ...initialState,
                error,
                isRecoveredPassword: false,
                isRecoveringPassword: false
            })
            })
    it('login', ()=>{
        const initialState: LoginState = AppInitiaState.login;
        const newState= loginReducer(initialState, login({email:"valid@email.com", password:"anyPassword"}));
        expect(newState).toEqual({
            ...initialState,
            error:null,
            isLoggedin: false,
            isLoggingin: true
        })
    })
    it('login success', ()=>{
        const initialState: LoginState ={...AppInitiaState.login,isLoggingIn:true};
        const user = new User();
        user.id="anyId";

        const newState= loginReducer(initialState, loginSuccess( {user}));
        expect(newState).toEqual({
            ...initialState,
            isLoggedin: true,
            isLoggingin: false
        })
    })
    it('login fail', ()=>{
        const initialState: LoginState ={...AppInitiaState.login,isLoggingIn:true};
            const error={error: 'error'};
        const newState= loginReducer(initialState, loginFail( {
            error,
            any: undefined
        }));
        expect(newState).toEqual({
            ...initialState,
            error,
            isLoggedin: false,
            isLoggingin: false
        })
    })
        })