import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(buttonNumber: number) {
    console.log('Botón', buttonNumber, 'presionado');
    // Aquí puedes agregar la lógica para cada botón
  }

  

}
