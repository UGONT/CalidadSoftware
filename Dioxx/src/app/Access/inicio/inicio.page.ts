import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  isModalOpen = false;
  
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(buttonNumber: number) {
    console.log('Botón', buttonNumber, 'presionado');
    // Aquí puedes agregar la lógica para cada botón
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onOptionSelected(option: string) {
    console.log(`Seleccionaste: ${option}`);
    this.closeModal(); // Cierra el modal después de seleccionar
  }

  /* 
    nombre completo, direccion del recinto(debe daro error, no mostrar el dato aun ingresado), edad, cuidador asignado 
  
  */

}
