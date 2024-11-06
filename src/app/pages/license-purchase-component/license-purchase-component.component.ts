import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginPageComponentComponent } from '../login-page-component/login-page-component.component';
import { StartLicenseComponentComponent } from "../../shared/components/licensesComponents/start-license-component/start-license-component.component";
import { PremiumLicenseComponentComponent } from "../../shared/components/licensesComponents/premium-license-component/premium-license-component.component";
import { ProLicenseComponentComponent } from "../../shared/components/licensesComponents/pro-license-component/pro-license-component.component";
import { BusinessLicenseComponentComponent } from "../../shared/components/licensesComponents/business-license-component/business-license-component.component";

@Component({
  selector: 'app-license-purchase-component',
  standalone: true,
  imports: [RouterLink, LoginPageComponentComponent, StartLicenseComponentComponent, PremiumLicenseComponentComponent, ProLicenseComponentComponent, BusinessLicenseComponentComponent],
  templateUrl: './license-purchase-component.component.html',
  styleUrl: './license-purchase-component.component.css'
})
export class LicensePurchaseComponentComponent {

}
