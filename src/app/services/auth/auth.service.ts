import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/user';
import {
  Auth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  recoverEmailPassword(email: string): Observable<void> {
    return new Observable<void>((observer) => {
      sendPasswordResetEmail(this.auth, email)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }
  login(email: string, password: string): Observable<User> {
    return new Observable<User>((observer) => {
      // setPersistence(
      //   this.auth,
      //   firebase.default.auth.Auth.Persistence.LOCAL
      // ).then(() => {});

      signInWithEmailAndPassword(this.auth, email, password)
        .then((firebaseUser: UserCredential) => {
          observer.next({ email, id: firebaseUser.user.uid });
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }
}
