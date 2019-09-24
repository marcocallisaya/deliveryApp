import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { IonicModule } from '@ionic/angular';
import { ReservaVistaPage } from './reserva-vista.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaVistaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReservaVistaPage]
})
export class ReservaVistaPageModule {}
