import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPageModule } from './register.module';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;
  let page;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage,AppRoutingModule,ReactiveFormsModule,RegisterPageRoutingModule, ReactiveFormsModule],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    router= TestBed.get(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = fixture.debugElement.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create register form on page init', () => {
    fixture.detectChanges();
    expect(component.registerForm).not.toBeUndefined();
  });
  it('should go to loginpage on Registrati', () => {
    fixture.detectChanges();
    spyOn(router, "navigate");
    component.registerForm.getForm().get('email').setValue;("anyEmail");
    component.registerForm.getForm().get('password').setValue;("anyPassword");
    component.registerForm.getForm().get('confermapassword').setValue;("anyPassword");
    page.querySelector('ion-button').click();
    
    expect(router).toHaveBeenCalledWith(["login"]);
    

  });
  it("should not be allowed to register with form invalid",()=>{
    fixture.detectChanges();
    spyOn(router, "navigate");
    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledWith(0);
   
})
});
