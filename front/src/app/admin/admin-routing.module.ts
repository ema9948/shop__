import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { AgregarComponent } from './forms/producto/agregar/agregar.component';
import { EditarComponent } from './forms/producto/editar/editar.component';

export const adminRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/agregar', component: AgregarComponent },
  { path: 'productos/editar/:id', component: EditarComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetPasswordComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    PerfilComponent,
    ProductosComponent,
    AgregarComponent,
    EditarComponent,
  ],
  imports: [RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
