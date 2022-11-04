import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { LavoriService } from 'src/app/services/lavori.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-visualizza-lavoti',
  templateUrl: './visualizza-lavoti.page.html',
  styleUrls: ['./visualizza-lavoti.page.scss'],
})
export class VisualizzaLavotiPage implements OnInit {
  lavories: any;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(private router: Router, private lavoriService: LavoriService) {
    this.lavoriService.onLavoriesChanged
      // eslint-disable-next-line no-underscore-dangle
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((lavories) => {
        this.lavories = lavories;
        console.log('Debug lavories:', this.lavories);
      });
  }

  ngOnInit() {
    this.lavoriService.getLavories();
    console.log('Debug lavories:', this.lavories);
  }

  aggiungiLavori() {
    this.router.navigate(['agguingi-lavoro']);
  }
}
