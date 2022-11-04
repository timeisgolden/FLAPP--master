import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/AuthGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule), canLoad:[AuthGuard]
  },
  {
    path: 'agguingi-lavoro',
    loadChildren: () => import('./pages/agguingi-lavoro/agguingi-lavoro.module').then( m => m.CreateLavoroPageModule)
  },
  {
    path: 'visualizza-lavoti',
    loadChildren: () => import('./pages/visualizza-lavoti/visualizza-lavoti.module').then( m => m.VisualizzaLavotiPageModule), canLoad:[AuthGuard]
  },
  {
    path: 'visualizza-lavori-specifico',
    loadChildren: () => import('./pages/visualizza-lavori-specifico/visualizza-lavori-specifico.module').then( m => m.VisualizzaLavoriSpecificoPageModule), canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
