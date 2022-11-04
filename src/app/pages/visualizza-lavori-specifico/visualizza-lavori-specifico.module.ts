import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizzaLavoriSpecificoPageRoutingModule } from './visualizza-lavori-specifico-routing.module';

import { VisualizzaLavoriSpecificoPage } from './visualizza-lavori-specifico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizzaLavoriSpecificoPageRoutingModule
  ],
  declarations: [VisualizzaLavoriSpecificoPage]
})
export class VisualizzaLavoriSpecificoPageModule {}
