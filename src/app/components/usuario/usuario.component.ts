import { Component, OnInit } from '@angular/core';
import Data from '../../data/usuarios.json';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUsuarios: any;

  constructor() { }

  ngOnInit(): void {
    "use strict";

    this.listaUsuarios = Data.usuarios;
    console.log (this.listaUsuarios);

    var fullHeight = function() {
  
    };
    fullHeight();
  

  }

}