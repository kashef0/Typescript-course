import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, NgSwitchCase, NgSwitch],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  meter!: number;
  resultatat : any = 0;
  myVar: any;

  meterToFeet(): void {
    this.resultatat  = (this.meter * 3.28084).toFixed(2) + " ft"; 
  }

  temperature(): void {
    this.resultatat  = (this.meter * 9/5 + 32).toFixed(1) + " °F";
  }

}
