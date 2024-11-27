import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.page.html',
  styleUrls: ['./telefono.page.scss'],
})
export class TelefonoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayNumber: string = '';

  addDigit(digit: number) {
    this.displayNumber += digit.toString();
    this.updateDisplay();
  }

  clearNumber() {
    this.displayNumber = '';
    this.updateDisplay();
  }

  makeCall() {
    console.log('Llamando al número: ' + this.displayNumber);
    // Agrega la lógica para hacer la llamada aquí
  }

  updateDisplay() {
    document.getElementById('display-number')!.textContent = this.displayNumber;
  }

}
