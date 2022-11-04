import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizzaLavotiPageRoutingModule } from './visualizza-lavoti-routing.module';

import { VisualizzaLavotiPage } from './visualizza-lavoti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizzaLavotiPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VisualizzaLavotiPage]
})
export class VisualizzaLavotiPageModule {}
