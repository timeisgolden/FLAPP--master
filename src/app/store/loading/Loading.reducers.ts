
import { createReducer,on} from "@ngrx/store";
import { hide, show } from "./Loading.Action";

const reducer = createReducer({show:null},
    on(show, ()=>{
        return {show: true};
    }),

    on(hide, ()=>{
        return{show: false};
    })
    );

    export function loadingReducer(state, action){
        return reducer(state, action);
    }