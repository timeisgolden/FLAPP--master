import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLavoroPageRoutingModule } from './agguingi-lavoro-routing.module';

import { CreateLavoroPage } from './agguingi-lavoro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateLavoroPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateLavoroPage]
})
export class CreateLavoroPageModule {}
