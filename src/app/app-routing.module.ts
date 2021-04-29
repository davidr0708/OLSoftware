import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BusquedaComponent} from './components/busqueda/busqueda.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';


const routes: Routes = [

  {path: '', component: LoginComponent },
  {path: 'sidebar', component: SidebarComponent, 
    children:[
      {  path: 'usuario', component: UsuarioComponent},
      {  path: 'roles', component: RolesComponent},
      {path: 'construccion', component: ConstruccionComponent },
    ] },
  {path: 'roles', component: RolesComponent },
  {path: 'busqueda', component: BusquedaComponent },
  {path: 'construccion', component: ConstruccionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
