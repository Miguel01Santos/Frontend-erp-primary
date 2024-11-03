import { Routes } from '@angular/router';

import { LoginPageComponentComponent } from './pages/login-page-component/login-page-component.component';
import { LicensePurchaseComponentComponent } from './pages/license-purchase-component/license-purchase-component.component';

export const routes: Routes = [
    {
        path: '', component: LoginPageComponentComponent
    },
    {
        path: 'routeLicense', component: LicensePurchaseComponentComponent
    }
];
