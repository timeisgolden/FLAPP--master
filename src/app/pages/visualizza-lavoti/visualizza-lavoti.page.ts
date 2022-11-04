import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Router } from '@angular/router';
import { Database } from '@angular/fire/database';
import { getApp } from 'firebase/app';
import { collection, doc, Firestore, getDocs, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-visualizza-lavoti',
  templateUrl: './visualizza-lavoti.page.html',
  styleUrls: ['./visualizza-lavoti.page.scss'],
})
export class VisualizzaLavotiPage implements OnInit {

  constructor(private router: Router, db: Database) {}



  getAll(){
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    const lookCategorysCollectionRef = collection(db, 'Lavori')
    onSnapshot(lookCategorysCollectionRef,snapshotChanges => {
      const lookCategories = map(snapshotChanges.docs, (doc) => { return new AccessoryItemModel(doc.id, doc.data()); });
      onLookCategorysChanged.next(sortBy(lookCategories, (item) => item.name));
    }, (error) => this.onLookCategorysChanged.next([]));
    
  }
  

  ngOnInit() {
  }

  AggiungiLavori(){
    this.router.navigate(["agguingi-lavoro"]);

  }


}
