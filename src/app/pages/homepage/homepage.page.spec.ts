import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Route, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomepagePage } from './homepage.page';

describe('HomepagePage', () => {
  let component: HomepagePage;
  let fixture: ComponentFixture<HomepagePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagePage ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomepagePage);
    router= TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to lavori on button visualizza lavori', () => {
    spyOn(router,"navigate");
    component.VisualizzaLavori();
    expect(router).toHaveBeenCalledWith(["visualizza-lavoti"]);
  });
});
