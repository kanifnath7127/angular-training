import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SignInComponent,
    RegisterComponent,
    VerifyEmailComponent,
  ],
  exports: [VerifyEmailComponent, SignInComponent, RegisterComponent],
})
export class MembershipModule {}
