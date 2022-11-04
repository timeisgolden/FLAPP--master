import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizzaLavoriSpecificoPage } from './visualizza-lavori-specifico.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizzaLavoriSpecificoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizzaLavoriSpecificoPageRoutingModule {}
