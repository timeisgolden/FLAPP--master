import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { loadingReducer } from "./loading/Loading.reducers";
import { LoginEffects } from "./login/Login.effects";
import { loginReducer } from "./login/LoginReducers";

export const AppStoreModule =[
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", loadingReducer),
    StoreModule.forFeature("login", loginReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
        LoginEffects
    ])

]

