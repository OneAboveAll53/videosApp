import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'doutor-estranho',
    loadChildren: () => import('./filmes/doutor-estranho/doutor-estranho.module').then( m => m.DoutorEstranhoPageModule)
  },
  {
    path: 'buzzlightyear',
    loadChildren: () => import('./filmes/buzzlightyear/buzzlightyear.module').then( m => m.BuzzlightyearPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
