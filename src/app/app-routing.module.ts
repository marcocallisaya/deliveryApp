import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AfterloginService } from './afterlogin.service';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AfterloginService]
  
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path:'',
    redirectTo:'login',pathMatch:'full'
  },
  { path: 'reserva-vista', loadChildren: './reserva-vista/reserva-vista.module#ReservaVistaPageModule' },
  { path: 'pedido-vista', loadChildren: './pedido-vista/pedido-vista.module#PedidoVistaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
