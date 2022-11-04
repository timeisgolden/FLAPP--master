import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/AppState';
import { hide, show } from 'src/app/store/loading/Loading.Action';
import { login, recoverPassword } from 'src/app/store/login/LoginActions';
import { LoginState } from 'src/app/store/login/LoginState';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  
  form : FormGroup;
  loginStateSubscription: Subscription;

  constructor(private router:Router,
    private formBuilder : FormBuilder,
    private store:Store<AppState>, 
    private toastController: ToastController) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();

    this.loginStateSubscription= this.store.select('login').subscribe( loginState =>{
      this.onIsRecoveredPassword(loginState);
      this.onError(loginState);
      this.toggleLoading(loginState);
      this.onIsLogged(loginState);
    })
  }
  ngOnDestroy(): void {
    if(this.loginStateSubscription){
      this.loginStateSubscription.unsubscribe();
    }
    
  }

 

private toggleLoading(LoginState: LoginState){
  if(LoginState.isLoggingIn || LoginState.isRecoveringPassword){
    this.store.dispatch(show());
}else{
  this.store.dispatch(hide());
}
}


private async onError (loginState: LoginState){
  if(loginState.error){
    const toaster = await this.toastController.create({
    position:"bottom",
    message:loginState.error.message,
    color:"danger"
  });
  toaster.present();
  }
}
  private async onIsRecoveredPassword(loginState: LoginState){
    if(loginState.isRecoveredPassword){
      
    
      const toaster = await this.toastController.create({
        position:"bottom",
        message:"email per recuperare la password inviata",
        color:"success"

      });
      toaster.present();
    }
  }

  private onIsLogged(loginState: LoginState){
    if(loginState.isLoggedIn){
      this.router.navigate(["homepage"]);
    }
  }


  Login(){
    this.store.dispatch(login({email: this.form.get('email').value, password: this.form.get('password').value}));


  }
  Register(){
    this.router.navigate(["register"]);
  }

  forgotEmailPassword(){
    this.store.dispatch(recoverPassword({email: this.form.get('email').value}));
  }
}
