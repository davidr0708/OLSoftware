import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators} from '@angular/forms'
import Data from '../../data/usuarios.json';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorAutenticacion: boolean =false;
  listaUsuarios: any;
  verCargando: boolean =false;
  loginForm = new FormGroup ({

    usuario : new FormControl('', Validators.required),
    pasword : new FormControl('', Validators.required)

  })

  constructor(private router:Router) { 
  }

  ngOnInit(): void {

    this.listaUsuarios = Data.usuarios;
    console.log (this.listaUsuarios);

  }

// select * from usuarios where correo='pepito' and password='12345';  
  iniciarSesion (correo: string, passwod: string): void{
    
    this.verCargando=true; 
    setTimeout(()=>{
      let buscar = this.listaUsuarios.find((user: any) => user.correo == correo && user.password == passwod);
      if(buscar){
        sessionStorage.setItem('idNombre', buscar.nombres + ' ' + buscar.apellidos);
        this.router.navigate(['/sidebar/usuario'])
      }else{
        this.verCargando = false;
        this.errorAutenticacion =true;
      }
    }, 3000); 
    

  }

onLogin(form: any){
  console.log(form)
}

}
function user(user: any, arg1: (any: any) => boolean) {
  throw new Error('Function not implemented.');
}

