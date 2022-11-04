import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizzaLavotiPage } from './visualizza-lavoti.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizzaLavotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizzaLavotiPageRoutingModule {}
