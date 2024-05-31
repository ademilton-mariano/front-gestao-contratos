import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ContratosComponent } from './contratos/contratos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
  {path: 'contratos', component: ContratosComponent},
  { path: 'contratos', redirectTo: '/contratos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
