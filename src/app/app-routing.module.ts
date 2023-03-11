import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'city',
    loadChildren: () => import('./city/city.module').then( m => m.CityPageModule)
  },
  {
    path: 'site',
    loadChildren: () => import('./site/site.module').then( m => m.SitePageModule)
  },
  {
    path: 'device-cat',
    loadChildren: () => import('./device-cat/device-cat.module').then( m => m.DeviceCatPageModule)
  },
  {
    path: 'device-type',
    loadChildren: () => import('./device-type/device-type.module').then( m => m.DeviceTypePageModule)
  },
  {
    path: 'devcie-more',
    loadChildren: () => import('./devcie-more/devcie-more.module').then( m => m.DevcieMorePageModule)
  },
  {
    path: 'gateway',
    loadChildren: () => import('./gateway/gateway.module').then( m => m.GatewayPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
