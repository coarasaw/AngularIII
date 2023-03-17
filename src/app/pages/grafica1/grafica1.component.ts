import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  @Input() title: string = 'Sin titulo';

   public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
   public data1 = [
    [0, 15, 40]
  ];
  

}
