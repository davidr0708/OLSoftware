import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

//Rutas principales
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    LoadingComponent,
    RolesComponent,
    UsuarioComponent,
    BusquedaComponent,
    ConstruccionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
