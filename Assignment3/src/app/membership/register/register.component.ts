import { Component, ViewChild } from '@angular/core';
import { Customer } from '../models/customer';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmailService } from '../services/email.service';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LoadingComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  model: Customer = new Customer(
    'Kanif',
    'Yewale',
    'kanif@example.com',
    9960379009,
    20,
    new Date('1992-06-20'),
    'Pune',
    'Gold',
    false,
    []
  );
  registrationSuccess: boolean = false;
  isLoading: boolean = false;
  emailSent: boolean = false;

  // Add ViewChild to get access to the form
  @ViewChild('registerForm') registerForm!: NgForm;

  constructor(
    private emailService: EmailService,
    private notificationService: NotificationService
  ) {}

  resetForm() {
    // Reset the model
    this.model = new Customer(
      '',
      '',
      '',
      null as any,
      null as any,
      null as any,
      '',
      '',
      false,
      []
    );

    // Reset the form if it exists
    if (this.registerForm) {
      this.registerForm.resetForm(this.model);

      // Reset all form controls to pristine and untouched state
      Object.keys(this.registerForm.controls).forEach((key) => {
        const control = this.registerForm.controls[key];
        control.markAsPristine();
        control.markAsUntouched();
      });
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;

      // Send verification email
      this.emailService
        .sendVerificationEmail(this.model.email, this.model.firstName)
        .subscribe({
          next: (success) => {
            this.isLoading = false;
            console.log(success);
            if (success) {
              this.notificationService.success(
                'Please check your email for verification link.',
                'Registration Successful'
              );
              this.resetForm();
            }
          },
          error: (error) => {
            this.isLoading = false;
            this.notificationService.error(
              'Failed to send verification email. Please try again.',
              'Registration Error'
            );
            console.error('Error sending verification email:', error);
          },
        });
    }
  }
}
