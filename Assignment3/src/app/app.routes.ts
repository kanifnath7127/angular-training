import { Routes } from '@angular/router';
import { SignInComponent } from './membership/sign-in/sign-in.component';
import { RegisterComponent } from './membership/register/register.component';
import { VerifyEmailComponent } from './membership/verify-email/verify-email.component';
import { CartComponent } from './shopping-cart/cart/cart.component';

export const routes: Routes = [
  // default route it will redirect to path 'cart'
  // if you want to change default route change 'cart' to your desired route
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  // sign-in route
  { path: 'sign-in', component: SignInComponent },
  // register route
  { path: 'register', component: RegisterComponent },
  // Verify Email route
  { path: 'verify-email/:token', component: VerifyEmailComponent },
  // Cart route
  { path: 'cart', component: CartComponent },
];
