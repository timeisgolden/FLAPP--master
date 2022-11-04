import { StoredCallback } from "@capacitor/core/types/definitions-internal";
import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./login/LoginState";

export interface AppState{

loading : LoadingState;
login : LoginState;
}