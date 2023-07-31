import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminRoutes } from './admin/admin-routing.module';
import { DashboardComponent } from './admin/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: adminRoutes },
  { path: '**', pathMatch: 'full', redirectTo: '' },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [DashboardComponent, NavbarComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
