import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Firestore } from 'firebase/firestore';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { VisualizzaLavotiPage } from './visualizza-lavoti.page';

describe('VisualizzaLavotiPage', () => {
  let component: VisualizzaLavotiPage;
  let fixture: ComponentFixture<VisualizzaLavotiPage>;
  let router: Router;
 

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaLavotiPage ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizzaLavotiPage);
    component = fixture.componentInstance;
    router= TestBed.get(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to crea lavori on visualizza lavori', () => {
    spyOn(router,"navigate");
    expect(router).toHaveBeenCalledWith(["agguingi-lavoro"]);
    component.AggiungiLavori()
  });
});
