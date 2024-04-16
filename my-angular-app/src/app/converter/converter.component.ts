import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {

  meter: number = 0;
  resultatat : any = 0;
  meterToFeet(): void {
    this.resultatat  = (this.meter * 3.28084).toFixed(2) + " ft"; 
  }

  temperature(): void {
    this.resultatat  = (this.meter * 9/5 + 32).toFixed(1) + " °F";
  }

}
