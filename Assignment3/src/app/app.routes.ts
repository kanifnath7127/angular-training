import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./membership/membership.module').then((m) => m.MembershipModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./product-catalog/product-catalog.module').then(
        (m) => m.ProductCatalogModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
];
