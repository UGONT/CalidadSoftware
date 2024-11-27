import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-adulto',
  templateUrl: './form-adulto.page.html',
  styleUrls: ['./form-adulto.page.scss'],
})
export class FormAdultoPage implements OnInit {

  formData = {
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: '',
    cuidadorAsignado: '',
    direccionRecinto: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Guardar los datos en localStorage como un objeto
    localStorage.setItem('formData', JSON.stringify(this.formData));

    // Navegar de regreso a la página de datos
    this.router.navigate(['/perfil']);
  }

  ngOnInit() {
  }

}
