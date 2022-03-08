import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: 'producs',
  //   component: ProductCardComponent,
  // },
  // {
  //   path: 'shopping',
  //   component: ShoppingCardComponent,
  // },
  // {
  //   path: '',
  //   component: AppComponent,
  // },
  {
    path: '',
    component: ProductCardComponent,
    outlet: 'products',
  },
  {
    path: '',
    component: ShoppingCardComponent,
    outlet: 'shopping',
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
