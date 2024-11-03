import { Component } from '@angular/core';
import { AccountLoginComponentComponent } from "../../shared/components/account-login-component/account-login-component.component";
import { FormLoginComponentComponent } from "../../shared/components/form-login-component/form-login-component.component";

@Component({
  selector: 'app-login-page-component',
  standalone: true,
  imports: [AccountLoginComponentComponent, FormLoginComponentComponent],
  templateUrl: './login-page-component.component.html',
  styleUrl: './login-page-component.component.css'
})
export class LoginPageComponentComponent {

}
