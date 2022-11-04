import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  onSnapshot,
} from '@angular/fire/firestore';
import { sortBy } from 'lodash';
import map from 'lodash/map';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LavoriService {
  lavoriesCollectionRef: CollectionReference<DocumentData>;
  onLavoriesChanged: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private afStore: Firestore) {
    this.lavoriesCollectionRef = collection(this.afStore, 'Lavori');
  }

  /**
   * For Look Category
   */
  getLavories(): void {
    onSnapshot(
      this.lavoriesCollectionRef,
      (snapshotChanges) => {
        const lookCategories = map(snapshotChanges.docs, (doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.onLavoriesChanged.next(
          sortBy(lookCategories, (item) => item.name)
        );
      },
      (error) => {
        console.error('Debug error:', error);
        this.onLavoriesChanged.next([]);
      }
    );
  }
}
