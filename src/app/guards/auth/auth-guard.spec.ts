import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { User } from 'src/app/model/user/user';
import { AppState } from 'src/app/store/AppState';
import { loginSuccess } from 'src/app/store/login/LoginActions';
import { loginReducer } from 'src/app/store/login/LoginReducers';
import { AuthGuard } from './AuthGuard';



describe('AuthGuardService', () => {
  let guard: AuthGuard;
  let store : Store<AppState>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[
      RouterModule.forRoot([]),
      StoreModule.forRoot([]),
      StoreModule.forFeature('login',loginReducer)
    ]});
    guard = TestBed.inject(AuthGuard);
    store= TestBed.get(Store);
    router= TestBed.get(Router);
  });

  it('should be allow logged user to access page', () => {
    store.dispatch(loginSuccess({user: new User()}));
    guard.canLoad().subscribe(isAllowed=>{
      expect(isAllowed).toBeTruthy();
    })
  });
  it('should not allow logged  if user is not logged in', () => {
    
    guard.canLoad().subscribe(isAllowed=>{
      expect(isAllowed).toBeFalsy();
    })
  });
  it('should not allowed user sent to the login page', () => {
    spyOn(router,'navigateByUrl');
    guard.canLoad().subscribe(()=>{

      expect(router.navigateByUrl).toHaveBeenCalledWith('login');
    })
  });
});
