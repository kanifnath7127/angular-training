import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PopupService } from '../../shared/services/popup.service';

export class Credential {
  constructor(public email: string, public password: string) {}
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  isValidUser: boolean = false;
  user: Credential = new Credential('ravi.tambade@transflower.in', 'seed');

  constructor(private svc: AuthService, private ns: PopupService) {} //DI

  onSubmit(form: any) {
    if (this.svc.validate(this.user.email, this.user.password)) {
      console.log('Valid User!');
      this.ns.success('Login Successful!');
    } else {
      console.log('Invalid User!');
      this.ns.warning('Invalid Credentials!');
    }
  }
}
