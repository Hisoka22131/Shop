import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminLayoutComponent} from './shared/admin-layout/admin-layout.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';
import {AddPageComponent} from './add-page/add-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {OrdersPageComponent} from './orders-page/orders-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo: 'admin/login', pathMatch: 'full'},
        {path: 'login', component: LoginLayoutComponent},
        {path: 'dashboard', component: DashboardPageComponent},
        {path: 'add', component: AddPageComponent},
        {path: 'orders', component: OrdersPageComponent},
        {path: 'products/:id/edit', component: EditPageComponent}
      ]
    }
    ])
  ],
  exports: [RouterModule],
  declarations: [
    AdminLayoutComponent,
    LoginLayoutComponent,
    AddPageComponent,
    DashboardPageComponent,
    EditPageComponent,
    OrdersPageComponent
  ]
})
export class AdminModule {

}
