import { Component } from '@angular/core';
import { AccountLoginComponentComponent } from '../../shared/components/account-login-component/account-login-component.component';
import { FormLoginComponentComponent } from '../../shared/components/form-login-component/form-login-component.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page-component',
  standalone: true,
  imports: [
    AccountLoginComponentComponent,
    FormLoginComponentComponent,
    RouterLink,
  ],
  templateUrl: './login-page-component.component.html',
  styleUrl: './login-page-component.component.css',
})
export class LoginPageComponentComponent {}
