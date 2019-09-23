import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductoPage } from './producto.page';
import {MatCardModule} from '@angular/material/card';
const routes: Routes = [
  {
    path: '',
    component: ProductoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [ProductoPage]
})
export class ProductoPageModule {}
