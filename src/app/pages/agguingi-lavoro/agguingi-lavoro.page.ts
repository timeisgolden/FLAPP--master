import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getApp } from 'firebase/app';
import{addDoc, collection, Firestore, getFirestore} from 'firebase/firestore';
import { LavoroPageForm } from './form/aggiungi-lavoro.page.form';


@Component({
  selector: 'app-agguingi-lavoro',
  templateUrl: './agguingi-lavoro.page.html',
  styleUrls: ['./agguingi-lavoro.page.scss'],
})

export class CreateLavoroPage implements OnInit {
  lavoroForm : LavoroPageForm;
  constructor(private router : Router, private formBuilder : FormBuilder) { }
  

async Work(){

  const firebaseApp = getApp();
  const db = getFirestore(firebaseApp);
  const workCollection = collection(db, 'Lavori')
  const res= await addDoc(workCollection, this.lavoroForm.getForm().value);
  console.log(res);
  console.log( this.lavoroForm.getForm().value);
    this.lavoroForm.getForm().markAllAsTouched();
    this.router.navigate(["visualizza-lavoti"]);
    }
   
  
  ngOnInit() {
    this.createForm();
  }
             

 
private createForm(){
  this.lavoroForm = new LavoroPageForm(this.formBuilder);
}
}
