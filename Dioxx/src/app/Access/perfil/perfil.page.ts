import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  displayData = [
    { label: 'Nombres', value: '' },
    { label: 'Apellido Paterno', value: '' },
    { label: 'Apellido Materno', value: '' },
    { label: 'Edad', value: '' },
    { label: 'Cuidador Asignado', value: '' },
    { label: 'Dirección del Recinto', value: '' }
  ];

  ionViewWillEnter() {
    const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
    
    // Asignar los datos de manera directa usando un mapeo
    this.displayData = [
      { label: 'Nombres', value: savedData.nombres || 'N/A' },
      { label: 'Apellido Paterno', value: savedData.apellidoPaterno || 'N/A' },
      { label: 'Apellido Materno', value: savedData.apellidoMaterno || 'N/A' },
      { label: 'Edad', value: savedData.edad || 'N/A' },
      { label: 'Cuidador Asignado', value: savedData.cuidadorAsignado || 'N/A' },
      { label: 'Dirección del Recinto', value: savedData.direccionRecinto || 'N/A' }
    ];
  }

  ngOnInit() {
  }

}
