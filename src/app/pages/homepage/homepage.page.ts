import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  VisualizzaLavori(){
    this.router.navigate(["visualizza-lavoti"]);
  }

}
