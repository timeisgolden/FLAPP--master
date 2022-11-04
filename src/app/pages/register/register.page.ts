import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPageForm } from './form/register.page.form';
import { AngularFireAuth  } from "@angular/fire/compat/auth";
import *as firebase from 'firebase/compat/app';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm : RegisterPageForm;
  constructor(private router : Router, private formBuilder : FormBuilder, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.createForm();
  }
 async Registration(){
  if(this.registerForm.getForm().valid){
  try{
    const res= await this.afAuth.createUserWithEmailAndPassword(
      this.registerForm.getForm().get('email').value,
      this.registerForm.getForm().get('password').value,)
      console.log(res);
  }catch(error){
    console.error(error);
  }
    this.registerForm.getForm().markAllAsTouched();
    this.router.navigate(["login"]);
    }
   
  }
 
  private createForm(){
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }
}
