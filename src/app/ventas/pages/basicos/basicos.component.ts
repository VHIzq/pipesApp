import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'kouru';
  nombreUpper: string = 'KOURU   ';
  nombreCompleto: string = 'kOUrU';

  fecha: Date = new Date(); //dia de hou
}
