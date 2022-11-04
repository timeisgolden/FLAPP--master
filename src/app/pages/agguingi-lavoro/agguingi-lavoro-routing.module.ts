import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateLavoroPage } from './agguingi-lavoro.page';

const routes: Routes = [
  {
    path: '',
    component: CreateLavoroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateLavoroPageRoutingModule {}
