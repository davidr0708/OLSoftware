import { Component, OnInit } from '@angular/core';
import { NoPreloading } from '@angular/router';
import  $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']

})
export class SidebarComponent implements OnInit {

  verNombre : boolean = false;
  nombreLogin: string | null = '';
  
  constructor() { 
    
  }

  ngOnInit(): void {
    this.nombreInicio();
    "use strict";

    var fullHeight = function() {
  
    };


    fullHeight();
  
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        
    });

  }

  cambiarEstado (){

    this.verNombre = !this.verNombre;

  }

  nombreInicio(){
    let nombre = sessionStorage.getItem('idNombre');
    this.nombreLogin = nombre;
  }
}
